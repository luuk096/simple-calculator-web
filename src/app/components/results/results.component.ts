import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import CalculationResultModel from 'src/app/shared/models/calculation-result.model';
import { CalculationService } from 'src/app/shared/services/calculation.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  displayedColumns: string[] = ['leftOperand', 'operator', 'rightOperand', 'result'];
  dataSource: MatTableDataSource<CalculationResultModel>;

  constructor(private calculatorService: CalculationService, private changeDetectorRefs: ChangeDetectorRef) { 
    this.dataSource = new MatTableDataSource<CalculationResultModel>();
  }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.calculatorService.findAll().subscribe(results => {
      this.dataSource = new MatTableDataSource<CalculationResultModel>(results);
    });
    this.calculatorService.getResults().subscribe(result => {
      const data = this.dataSource.data;
      data.push(result);
      this.dataSource = new MatTableDataSource<CalculationResultModel>(data);
    })
  }

}
