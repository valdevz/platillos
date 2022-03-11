import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

/*  const httpOptions =  {
      headers :  new HttpHeaders({'Content-Type': 'application/json'}) 
}*/

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // constructor(private http: HttpClient) { }
  constructor() { }
  isLoggedIn( token : string | null) : boolean{
    let hardcodeToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvcmdlIFZhbGRleiIsImlhdCI6MTUxNjIzOTAyMn0.qurL_618TvgOCcL8a9wzc2N7zS5cnS7PRs6Z8uAzRGA'
    if(token === hardcodeToken) {
      return true;
    }else {
      return false
    }
    //API to brings this info
    // return this.http.post('URI_API', {token},httpOptions)
  }
  login( username: string, password : string) : Observable<any> {
    if(username === 'user' && password === 'root'){
      return of({
        isLoggedIn : true, 
        accesToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvcmdlIFZhbGRleiIsImlhdCI6MTUxNjIzOTAyMn0.qurL_618TvgOCcL8a9wzc2N7zS5cnS7PRs6Z8uAzRGA',
        user :'Jorge',
        email : 'jorge.valdez@globant.com',
      })
    }else {
      return of(false)
    }
  }
}