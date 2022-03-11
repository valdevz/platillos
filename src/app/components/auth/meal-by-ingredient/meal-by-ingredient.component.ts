import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealsService } from 'src/app/_services/meals/meals.service';

@Component({
  selector: 'app-meal-by-ingredient',
  templateUrl: './meal-by-ingredient.component.html',
  styleUrls: ['./meal-by-ingredient.component.scss']
})
export class MealByIngredientComponent implements OnInit {
  meals! : Array<any> ;
  constructor(private route : ActivatedRoute,
              private mealsService : MealsService) { }

  ngOnInit(): void {
    this.getMealsByIngredient()
  }
  
  getIngredientId(): string {
    let ingredient = this.route.snapshot.paramMap.get('id') || ''
    return ingredient;
  }

  getMealsByIngredient(){
    const ingredient = this.getIngredientId();
    this.mealsService.getMealByPrincipalIngredient(ingredient).subscribe({
      next: data => {
        if(data.meals){
          this.meals = data.meals;
        }
      },
      error: err => console.log(err)
    })
  }



}
