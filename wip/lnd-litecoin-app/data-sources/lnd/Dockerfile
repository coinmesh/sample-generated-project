FROM golang:1.10

MAINTAINER Patrick Walters <coinmesh.com>

# Expose lnd ports (server, rpc).
EXPOSE 9735 10009 19332 29001

# Force Go to use the cgo based DNS resolver. This is required to ensure DNS
# queries required to connect to linked containers succeed.
ENV GODEBUG netdns=cgo

RUN useradd -r lnd \
  && go get -u github.com/golang/dep/cmd/dep \
  && git clone https://github.com/lightningnetwork/lnd $GOPATH/src/github.com/lightningnetwork/lnd

# Make lnd folder default.
WORKDIR $GOPATH/src/github.com/lightningnetwork/lnd

# Install dependencies and install/build lnd.
RUN dep ensure
RUN go install . ./cmd/...

RUN mkdir -p /home/lnd/.lnd
RUN mkdir -p /home/lnd/.litecoin

RUN chown -R lnd /home/lnd/.lnd
RUN chown -R lnd /home/lnd/.litecoin

VOLUME ["/home/lnd/.lnd", "/home/lnd/.litecoin"]

USER "lnd"

CMD ["lnd"]
