import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth/auth.service';
import { TokenService } from 'src/app/_services/token/token.service';
import { HttpClient } from '@angular/common/http';
import { FormControl,FormGroup,Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoggedIn: boolean = false;
  isLoggedFailed: boolean = false;
  errorMessage = '';

  usernameControl = new FormControl('', [Validators.required]);
  passwordControl = new FormControl('', [Validators.required]);

  constructor(private authService : AuthService,
              private tokenStorage : TokenService,
              private router : Router) {}

  ngOnInit(): void {
    let token = this.tokenStorage.getToken();
    if(token){
      this.isLoggedIn = true;
    }
    if(this.isLoggedIn) this.router.navigate(['/home'])
  }

  submit() : void {
    // const {username, password };
    const username = this.usernameControl.value
    const password = this.passwordControl.value;
    this.authService.login(username, password).subscribe({
      next : data => {
        if(data) {
          this.tokenStorage.saveToken(data.accesToken);
          this.isLoggedFailed = false;
          this.isLoggedIn = true;
          window.location.reload()
        }
      },
      error: err => {
        console.log(err)
      }
    })
    console.log(this)
  }

}
