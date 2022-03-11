import { Component, OnInit } from '@angular/core';
import { MealsService } from 'src/app/_services/meals/meals.service';

@Component({
  selector: 'app-top-ingredients',
  templateUrl: './top-ingredients.component.html',
  styleUrls: ['./top-ingredients.component.scss']
})
export class TopIngredientsComponent implements OnInit {
  topIngredients! : Array<any>;

  constructor(private mealsService : MealsService) { }

  ngOnInit(): void {
    this.getIngredients();
  }

  getIngredients():any{
    this.mealsService.getIngredients().subscribe({
      next: data => {
        this.topIngredients = data.meals.slice(0,20);
      },
      error: err => console.log(err)
    })
  }

}
