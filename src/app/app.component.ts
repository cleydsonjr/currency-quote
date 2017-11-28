import {Component} from '@angular/core';
import {Currency} from './currency.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currencies: Currency[] = [
    {
      symbol: 'BRL',
      label: 'Real'
    },
    {
      symbol: 'USD',
      label: 'Dolar'
    },
    {
      symbol: 'EUR',
      label: 'Euro'
    },
  ];
  base = 'BRL';
  target   = 'USD';
}
