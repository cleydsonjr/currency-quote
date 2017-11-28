import {Component, OnInit} from '@angular/core';
import {delay} from 'q';
import {Currency} from './currency.model';
import {RatesService} from './rates.service';
import {Rate} from './rate.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loading = false;

  base: Currency = {
    name: 'BRL',
    label: 'Real',
    symbol: 'R$'
  };

  target: Currency = {
    name: 'USD',
    label: 'Dolar',
    symbol: '$'
  };

  currencies: Currency[] = [
    {
      name: 'EUR',
      label: 'Euro',
      symbol: '€'
    },
    {
      name: 'JPY',
      label: 'Yen',
      symbol: '¥'
    },
  ];

  amount = 5;
  converted = 0;

  constructor(private _ratesService: RatesService) {
    this.currencies.push(this.base);
    this.currencies.push(this.target);
  }

  ngOnInit(): void {
    this.update();
  }

  async update() {
    this.loading = true;
    await delay(500);
    let i = 1;
    if (this.base !== this.target) {
      const rate: Rate = await this._ratesService.getRate(this.base.name, this.target.name);
      i = rate.rates[this.target.name];
    }
    this.converted = this.amount * i;
    this.loading = false;
  }
}
