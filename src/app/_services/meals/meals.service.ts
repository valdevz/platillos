import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'
const URI_API = environment.uri_api;

@Injectable({
  providedIn: 'root'
})
export class MealsService {

  constructor(private https : HttpClient) { }

  getIngredients() : Observable<any>{
    return this.https.get(URI_API + 'list.php?i=list');
  }

  getAreas() : Observable<any> {
    return this.https.get(URI_API + 'list.php?a=list')
  }

  getCategories() : Observable<any>{
    return this.https.get(URI_API + 'list.php?c=list');
  }

  getRandomMeals() : Observable<any>{
    return this.https.get(URI_API + 'random.php');
  }

  getMealByID(id : string) : Observable<any>{
    return this.https.get(URI_API + 'lookup.php?i=' + id);
  }
  
  getMealByCategoryFilter(category : string) : Observable<any>{
    return this.https.get(URI_API + 'filter.php?c=' + category);
  }

  getMealByAreaFilter(area : string) : Observable<any>{
    return this.https.get(URI_API + 'filter.php?a=' + area);
  }

  getAllMeals() : Observable<any> {
  return this.https.get(URI_API + 'search.php?s=')
  }

  getMealByPrincipalIngredient(ingredient : string) : Observable<any>{
    return this.https.get(URI_API + 'filter.php?i=' + ingredient);
  }
}
