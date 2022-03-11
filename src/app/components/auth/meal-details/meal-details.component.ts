import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealsService } from 'src/app/_services/meals/meals.service';

@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrls: ['./meal-details.component.scss']
})
export class MealDetailsComponent implements OnInit {
  meal: any;
  ingredients : Array<string> = [];
  mesures : Array<string> = [];
  constructor(private route : ActivatedRoute,
              private mealsService : MealsService) { }

  ngOnInit(): void {
    this.getMealsById();
  }

  getMealId(): string {
    let meal = this.route.snapshot.paramMap.get('id') || ''
    console.log(meal)
    return meal;
  }

  getMealsById(){
    const id = this.getMealId();
    this.mealsService.getMealByID(id).subscribe({
      next: data => {
        if(data.meals){
          this.meal = data.meals[0];
          this.setIngredients(this.meal);
          this.setMesures(this.meal)
        }
      },
      error: err => console.log(err)
    })
  }

  setIngredients(meal : any){
    for (const prop in meal) {
      if(prop.substring(0,13) === 'strIngredient'){
        if(meal[prop].length > 0){
          this.ingredients.push(meal[prop])
        }
      }
    }
  }
  setMesures(meal : any){
    for (const prop in meal) {
      if(prop.substring(0,10) === 'strMeasure'){
        if(meal[prop].trim().length != 0){
          this.mesures.push(meal[prop])
        }
      }
    }
  }

}
