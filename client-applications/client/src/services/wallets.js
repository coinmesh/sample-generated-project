import {HttpWrapper} from './http-wrapper';
import {WalletInfo} from 'models/wallet-info';

export class WalletsService {
  static inject = [HttpWrapper];
  constructor(http) {
    this.http = http;
  }

  getInfo() {
    return this.http.get('/wallet-info').then(result => {
      console.log('-'.repeat(100))
      console.log(result)
      return new WalletInfo(result);
    });
  }
}
