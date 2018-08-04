export class App {
  configureRouter(config, router) {
    config.title = 'Litecoin Core Wallet';
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: 'routes/home/index', nav: true, title: 'Home' },
      { route: 'pay', name: 'pay', moduleId: 'routes/pay/index', nav: true, title: 'Pay' },
      { route: 'receive', name: 'receive', moduleId: 'routes/receive/index', nav: true, title: 'Receive' },
      { route: 'peers', name: 'peers', moduleId: 'routes/peers/index', nav: true, title: 'Peers' },
      { route: 'messages', name: 'messages', moduleId: 'routes/messages/index', nav: true, title: 'Messages' }
    ]);

    this.router = router;
  }
}
