import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatCardModule, MatInputModule, MatProgressSpinnerModule, MatSelectModule, MatToolbarModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';


import {AppComponent} from './app.component';
import {RatesService} from './rates.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatSelectModule,
    MatToolbarModule,
    NoopAnimationsModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    RatesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
