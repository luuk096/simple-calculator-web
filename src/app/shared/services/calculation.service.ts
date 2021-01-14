import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import CalculationModel from '../models/calculation.model';
import CalculationResultModel from '../models/calculation-result.model';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  private results = new Subject<CalculationResultModel>();
  
  constructor(private httpClient: HttpClient) { }

  calculate(calculation: CalculationModel): Observable<CalculationResultModel> {
    return this.httpClient.post<CalculationResultModel>(`${environment.api}/calculator/calculate`, calculation);
  }

  findAll(): Observable<CalculationResultModel[]> {
    return this.httpClient.get<CalculationResultModel[]>(`${environment.api}/calculator/results`);
  }

  sendResult(calculationResult: CalculationResultModel): void {
    this.results.next(calculationResult);
  }

  getResults(): Observable<CalculationResultModel> {
    return this.results.asObservable();
  }

}
