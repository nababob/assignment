import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import { take, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CurrencyDataService {

  public currentCurrencyRate: Subject<number> = new Subject();
  public historicalRates: Subject<any[]> = new Subject();
  
  constructor(private httpClient: HttpClient) { }

  getLatestRate(from: string, to: string){
    let querryParams = new HttpParams();
    querryParams = querryParams.append('base',from);
    querryParams = querryParams.append('symbols',to);
    this.httpClient.get('https://api.exchangeratesapi.io/latest',{params: querryParams}).pipe(
      take(1),
      map((data: any)=>{
        return data.rates[to];
      })
    ).subscribe((rate)=>{
      this.currentCurrencyRate.next(rate)
    });
  }

  getHistoricalRates(lowerLimit:string, upperLimit: string, from: string, to: string){
    let querryParams = new HttpParams();
    querryParams = querryParams.append('start_at',lowerLimit);
    querryParams = querryParams.append('end_at',upperLimit);
    querryParams = querryParams.append('symbols',to);
    querryParams = querryParams.append('base',from);
    this.httpClient.get('https://api.exchangeratesapi.io/history',{params: querryParams}).pipe(
      take(1),
      map((data: any)=>{
        let datesList = Object.keys(data.rates);
        let dataAray = [];
        datesList.forEach(key => {
          let innerArray = [];
          innerArray.push(key);
          innerArray.push(data.rates[key][to])
          dataAray.push(innerArray);
        });
        // Sort the Array
        let sortedArray = dataAray.sort((a,b)=>{
          if(new Date(a[0]).getTime() < new Date(b[0]).getTime())
          return -1;
          if(new Date(a[0]).getTime() > new Date(b[0]).getTime())
          return 1;
          if(new Date(a[0]).getTime() == new Date(b[0]).getTime())
          return 0;
        })
        return sortedArray;
      })
    ).subscribe((historicalRates)=>{
      this.historicalRates.next(historicalRates)
    });
  }

}
