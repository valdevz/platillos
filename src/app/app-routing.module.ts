import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/auth/home/home.component';
import { MealByIngredientComponent } from './components/auth/meal-by-ingredient/meal-by-ingredient.component';
import { MealDetailsComponent } from './components/auth/meal-details/meal-details.component';
import { MealsComponent } from './components/auth/meals/meals.component';
import { ProfileComponent } from './components/auth/profile/profile.component';
import { TopIngredientsComponent } from './components/auth/top-ingredients/top-ingredients.component';
import { LoginComponent } from './components/login/login.component';

import { LoginGuard } from './_guards/login.guard'

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [LoginGuard]},
  { path: 'top-ingredients', component: TopIngredientsComponent, canActivate: [LoginGuard]},
  { path: 'meal-by-ingredient/:id', component: MealByIngredientComponent, canActivate: [LoginGuard]},
  { path: 'meals', component: MealsComponent, canActivate: [LoginGuard]},
  { path: 'meals/:id', component: MealDetailsComponent, canActivate: [LoginGuard]},
  { path: 'profile', component: ProfileComponent, canActivate: [LoginGuard]},
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
