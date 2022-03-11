import { Component, OnInit } from '@angular/core';
import { AuthService } from './_services/auth/auth.service';
import { TokenService } from './_services/token/token.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
constructor(private authService : AuthService,
            private tokenService : TokenService){}
  isLoggedInn: boolean = false;

  title = 'platillos';

  ngOnInit(): void {
    let token = this.tokenService.getToken();
    if(token){
     this.isLoggedInn = this.authService.isLoggedIn(token)

    }
  }
}
