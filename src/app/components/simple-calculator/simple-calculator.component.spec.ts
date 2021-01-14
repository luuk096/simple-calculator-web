import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculationService } from 'src/app/shared/services/calculation.service';

import { SimpleCalculatorComponent } from './simple-calculator.component';

describe('SimpleCalculatorComponent', () => {
  let component: SimpleCalculatorComponent;
  let fixture: ComponentFixture<SimpleCalculatorComponent>;

  let calculationService: CalculationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleCalculatorComponent ],
      imports: [
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    calculationService = fixture.debugElement.injector.get<CalculationService>(CalculationService);
  });
});
