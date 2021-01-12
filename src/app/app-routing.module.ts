import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleCalculatorComponent } from './components/simple-calculator/simple-calculator.component';

const routes: Routes = [
  {
    path: '',
    component: SimpleCalculatorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
