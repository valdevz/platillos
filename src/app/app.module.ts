import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularMaterialModule } from './angular-material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/auth/home/home.component';
import { TopIngredientsComponent } from './components/auth/top-ingredients/top-ingredients.component';
import { MealByIngredientComponent } from './components/auth/meal-by-ingredient/meal-by-ingredient.component';
import { MealsComponent } from './components/auth/meals/meals.component';
import { MealDetailsComponent } from './components/auth/meal-details/meal-details.component';
import { ProfileComponent } from './components/auth/profile/profile.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TopIngredientsComponent,
    MealByIngredientComponent,
    MealsComponent,
    MealDetailsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
