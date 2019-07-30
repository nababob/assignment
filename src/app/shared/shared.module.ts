import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyDataService } from './services/currency-data.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [CurrencyDataService]
})
export class SharedModule { }
