import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MealsService } from 'src/app/_services/meals/meals.service';

@Component({
  selector: 'app-top-ingredients',
  templateUrl: './top-ingredients.component.html',
  styleUrls: ['./top-ingredients.component.scss']
})
export class TopIngredientsComponent implements OnInit {
  topIngredients : Array<any> = [];
  allTopIngredients! : Array<any>;

  constructor(private mealsService : MealsService) { }

  ngOnInit(): void {
    this.getIngredients();
  }

  getIngredients():any{
    this.mealsService.getIngredients().subscribe({
      next: data => {
        this.allTopIngredients = data.meals;
        this.topIngredients = data.meals.slice(0,10);
      },
      error: err => console.log(err)
    })
  }
  onPageChange($event :PageEvent){
    this.topIngredients =  this.allTopIngredients.slice($event.pageIndex*$event.pageSize,
       $event.pageIndex*$event.pageSize + $event.pageSize);
  }
}
