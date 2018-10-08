import {HttpWrapper} from './http-wrapper';
// import {Transaction} from 'models/transaction';

export class TransactionsService {
  static inject = [HttpWrapper];
  constructor(http) {
    this.http = http;
  }

  sendPayment(payment) {
    const body = {
      address: payment.to_address,
      tokens: payment.amount
    };
    return this.http.post('/transactions', body).then(result => {
      console.log('='.repeat(100))
      console.log(result)
      // return new Transaction(result.content);
      return result;
    });
  }
}
