import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from 'src/app/shared/material.module';
import { CalculationService } from 'src/app/shared/services/calculation.service';

import { ResultsComponent } from './results.component';

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;

  let calculationService: CalculationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsComponent ],
      imports: [
        HttpClientTestingModule,
        MaterialModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    calculationService = fixture.debugElement.injector.get<CalculationService>(CalculationService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
