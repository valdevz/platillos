import { Component, OnInit } from '@angular/core';
import { MealsService } from 'src/app/_services/meals/meals.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss']
})
export class MealsComponent implements OnInit {
  meals! : Array<any>;
  selectedValue!: string;

  filterOptions: Array<string> = ['Categoría', 'Zona', 'Ingrediente principal'];
  filter! : Array<string>;
  constructor(private mealsService:MealsService) { }

  ngOnInit(): void {
    this.getMeals()
  }

  getMeals():any{
    this.mealsService.getAllMeals().subscribe({
      next: data => {
        // console.log(data)
        this.meals = data.meals;;
        // console.log(this.meals)
      },
      error: err => console.log
    })
  }

}
