import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { CalculationService } from './services/calculation.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    CalculationService,
  ],
  exports: [
    MaterialModule,
  ],
})
export class SharedModule { }
