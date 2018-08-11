const config = {
  protocol: `${(process.env.RPC_PROTOCOL || 'http://')}`,
  username: `${(process.env.RPC_USERNAME || 'rpcuser')}`,
  password: `${(process.env.RPC_PASSWORD || 'rpcpassword')}`,
  host: `${(process.env.RPC_HOST || 'localhost')}` ,
  port: `${(process.env.RPC_PORT || 19332)}`
};

module.exports = config;
