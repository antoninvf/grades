import { Component } from '@angular/core';
import { GradeCalcService } from './services/gradeCalc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public gcs: GradeCalcService = new GradeCalcService();

  public gradeInputValue: number = parseInt('');
  public weightInputValue: number = parseInt('');

  get grades() {
    return this.gcs.getGrades()
  }

  calculate() {
    return this.gcs.calc()
  }

  addGrade() {
    this.gcs.addGrade(this.gradeInputValue, this.weightInputValue)
  }
}
