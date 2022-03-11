import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/_services/token/token.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private tokenService : TokenService) { }

  ngOnInit(): void {
  }

  signOut(){
    this.tokenService.signOut();
    window.location.reload()
  }

}
