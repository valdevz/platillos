import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { MealsService } from 'src/app/_services/meals/meals.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  error : string = '';
  meal: any ;
  constructor(private mealsService : MealsService) { }

  ngOnInit(): void {
    this.mealsService.getRandomMeals().subscribe({
      next: res => {
        this.meal = res.meals[0];
        if(this.meal){
          this.simpleAlert();
        }
      },
      error: err => this.error = err
    })
  }

  simpleAlert(){  
    Swal.fire({
      imageUrl: this.meal.strMealThumb,
      imageHeight: 300,
      imageAlt: 'A tall image',
      title: `<strong>Platillo del día: ${this.meal.strMeal}</strong>`,
      html:
        `<strong>Categoría:</strong> ${this.meal.strCategory} <br><br>` +
        `<a href="/meals/${this.meal.idMeal}">Ver detalles del platillo</a>`,
      showConfirmButton: false,
      allowOutsideClick : false
    })
  } 
  topend()  
  {  
    Swal.fire({  
      position: 'top-end',  
      icon: 'success',  
      title: 'Your work has been saved',  
      showConfirmButton: false,  
      timer: 1500  
    })  
  }  
  ngOnDestroy(): void {
    Swal.close();
  }

}
