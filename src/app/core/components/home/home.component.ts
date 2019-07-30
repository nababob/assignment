import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Constants } from 'src/app/shared/constants';
import { ListObject } from 'src/app/shared/Models/ListObject';
import { CurrencyDataService } from 'src/app/shared/services/currency-data.service';
import { Util } from 'src/app/shared/utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currencyList: ListObject[] = Constants.currencyList;
  currencyListMap: Map<string, string> = Constants.currencyListMap;
  converterForm: FormGroup;
  defaultCurencyPair = {from:'USD', to:'INR'};
  selectedFromCurrency: string = this.currencyListMap.get(this.defaultCurencyPair.from);
  selectedBaseCurrency: string = this.currencyListMap.get(this.defaultCurencyPair.to);
  currentRate: number;
  chartDataArray: any[] = [];  
  utils: Util = new Util();
  constructor(private currencyDataService: CurrencyDataService) {}

  ngOnInit() {
    
    // Call Api to get latest rate of default curency pair (Default is USD to INR)
    this.currencyDataService.getLatestRate(this.defaultCurencyPair.from, this.defaultCurencyPair.to);
    // Call Api to get historical trends of default selected pair
    this.currencyDataService.getHistoricalRates(this.utils.nthDate(180),this.utils.formatDate(new Date().getTime()), this.defaultCurencyPair.from, this.defaultCurencyPair.to);

    // Intialize reactive form fields
    this.converterForm = new FormGroup({
      baseValue: new FormControl({value: '', disabled: true}),
      baseCurrency: new FormControl(this.defaultCurencyPair.to, [Validators.required]),
      fromValue: new FormControl({value: 1, disabled: false},[Validators.required]),
      fromCurrency: new FormControl(this.defaultCurencyPair.from, [Validators.required])
    });

    // Subscribe the value change of from currency value field chnage
    this.converterForm.get('fromValue').valueChanges.subscribe((fromValue)=>{
      this.converterForm.get('baseValue').setValue(Number((this.currentRate * fromValue).toFixed(2)));
    });

    // Subscribe Api response of latest Currency rate
    this.currencyDataService.currentCurrencyRate.subscribe(latestRate=>{
      if(latestRate){
        this.currentRate = Number(latestRate.toFixed(2));
        let fromCurrencyValue = this.converterForm.get('fromValue').value;
        this.converterForm.get('baseValue').setValue(Number((this.currentRate * fromCurrencyValue).toFixed(2)));
        this.selectedFromCurrency = this.currencyListMap.get(this.converterForm.get('fromCurrency').value);
        this.selectedBaseCurrency = this.currencyListMap.get(this.converterForm.get('baseCurrency').value);
      }
    });

    // Subscribe Api response of latest trends of selected currency pair 
    this.currencyDataService.historicalRates.subscribe(trends=>{
      if(trends){
        this.chartDataArray = trends;
        this.chartDataArray.unshift(['Date','Rates']);
      }
    });
  }

  onCurrencyChange(){
    this.currencyDataService.getLatestRate(this.converterForm.get('fromCurrency').value, this.converterForm.get('baseCurrency').value);
    this.currencyDataService.getHistoricalRates(this.utils.nthDate(180),this.utils.formatDate(new Date().getTime()), this.converterForm.get('fromCurrency').value, this.converterForm.get('baseCurrency').value);
  }

}
