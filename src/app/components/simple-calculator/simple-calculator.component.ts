import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OperatorModel } from 'src/app/shared/models/operator.model';
import { CalculationService } from 'src/app/shared/services/calculation.service';
import CalculationModel from '../../shared/models/calculation.model';


@Component({
  selector: 'app-simple-calculator',
  templateUrl: './simple-calculator.component.html',
  styleUrls: ['./simple-calculator.component.scss']
})
export class SimpleCalculatorComponent implements OnInit {

  leftOperand: number = 0;
  operator: OperatorModel = 0;
  rightOperand: number = 0;
  errorMessage: string = '';

  constructor(private calculationService: CalculationService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
  }

  calculate() {
    const calculation: CalculationModel = {
      leftOperand: this.leftOperand,
      operator: this.operator,
      rightOperand: this.rightOperand,
    }
    this.calculationService.calculate(calculation).subscribe(calculationResult => {
      this.calculationService.sendResult(calculationResult);
    }, (err: HttpErrorResponse) => {
      this.errorMessage = err.message;
    });
  }

}
