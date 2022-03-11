import { Component, OnInit, ViewChild } from '@angular/core';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { Router } from '@angular/router';
import { MealsService } from 'src/app/_services/meals/meals.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss']
})


export class MealsComponent implements OnInit {
  @ViewChild('matRef') matRef!: MatSelect;
  @ViewChild('matRefFilt') matRefFilt!: MatSelect;
  meals! : Array<any>;
  selectedValue!: string;
  typeOfFilter! : string;
  options: Array<string> = ['Categoría', 'Zona', 'Ingrediente principal'];
  filter!: Array<string> | null;
  constructor(private mealsService:MealsService,
              private router : Router) { }

  ngOnInit(): void {
    this.getMeals()
  }

  getMeals():any{
    this.mealsService.getAllMeals().subscribe({
      next: data => {
        this.meals = data.meals;
      },
      error: err => console.log(err)
    })
  }

  createArrayFilter(res : Array<any>, type: string){
    for (let i = 0; i < res.length; i++) {
      if(this.filter)
        this.filter.push(res[i][type])
    }
  }

  deleteFilters(){
    this.matRef.options.forEach((data: MatOption) => data.deselect());
    this.matRefFilt.options.forEach((data: MatOption) => data.deselect());
    this.filter = null;
    this.getMeals();
  }

  filterResults(filt : string){
    if(this.typeOfFilter == 'Categoría'){
      this.mealsService.getMealByCategoryFilter(filt).subscribe({
        next: data => {
          this.meals = data.meals;
        },
        error: err => console.log(err) 
      })
    }
    if(this.typeOfFilter == 'Zona'){
      this.mealsService.getMealByAreaFilter(filt).subscribe({
        next: data => {
          this.meals = data.meals;
        },
        error: err => console.log(err) 
      })
    }
    if(this.typeOfFilter == 'Ingrediente principal'){
      this.mealsService.getMealByPrincipalIngredient(filt).subscribe({
        next: data => {
          this.meals = data.meals;
        },
        error: err => console.log(err) 
      })
    }
  }

  filter1(e : Event){
    let filter = String(e)
    this.typeOfFilter = filter;
    if(filter == 'Categoría'){
      this.mealsService.getCategories().subscribe({
        next: data => {
          this.filter = [];
          this.createArrayFilter(data.meals, 'strCategory')
        },
        error: err => console.log(err) 
      })
    }
    if(filter == 'Zona'){
      this.mealsService.getAreas().subscribe({
        next: data => {
          this.filter = [];
          this.createArrayFilter(data.meals, 'strArea')
        },
        error: err => console.log(err) 
      })
    }
    if(filter == 'Ingrediente principal'){
      this.mealsService.getIngredients().subscribe({
        next: data => {
          this.filter = [];
          this.createArrayFilter(data.meals, 'strIngredient')
        },
        error: err => console.log(err) 
      })
    }
  }

}
