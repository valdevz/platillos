import { Injectable } from '@angular/core';
const TOKEN_KEY =  'auth-token'

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  signOut() : void {
    window.localStorage.clear();
    window.sessionStorage.clear();
  }

  public saveToken(token : string): void{
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY)
  }
}
