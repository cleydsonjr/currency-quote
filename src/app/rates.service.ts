import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Rate} from './rate.model';

@Injectable()
export class RatesService {

  resourcePath = 'https://api.fixer.io';

  constructor(private _http: HttpClient) {
  }

  async getRate(base: string, symbol: string): Promise<Rate> {
    const response = await this._http.get(`${this.resourcePath}?base=${base}&symbols=${symbol}`).toPromise();
    return await response as Rate;
  }
}
