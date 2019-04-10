import { Component } from '@angular/core';
import { AuthenticationService } from "./../authentication.service";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-sign-in-anon',
  templateUrl: './sign-in-anon.component.html',
  styleUrls: ['./sign-in-anon.component.css'],
  providers: [AuthenticationService]
})

export class SignInAnonComponent implements OnInit {

  constructor(public authService: AuthenticationService) { }

  ngOnInit() {
  }

  login(username) {
    if(username.length > 0) {
      this.authService.login(username);
    }
  }

}