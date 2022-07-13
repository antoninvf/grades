import { Grade } from '../models/grade.model';
export class GradeCalcService {

  private grades: Grade[] = []

  public calc() {
    // one grade calculation = grade * (itsWeight / totalWeight)

    let weights: number[] = [];
    let nums: number[] = [];

    for (let i = 0; i < this.grades.length; i++) {
      const w = this.grades[i].weight
      const g = this.grades[i].grade

      weights.push(w)
      nums.push(g)

    }

    const [sum, weightSum] = weights.reduce(
      (acc, w, i) => {
        acc[0] = acc[0] + nums[i] * w;
        acc[1] = acc[1] + w;
        return acc;
      },
      [0, 0]
    );
    return sum / weightSum;
  }

  public addGrade(grade: number, weight: number) {
    let newGrade = new Grade()
    newGrade.grade = grade
    newGrade.weight = weight
    this.grades.push(newGrade)
  }

  public getGrades() {
    return this.grades
  }

}
