import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  user: Observable<firebase.User>;
  private isLoggedIn: Boolean= false;
  private email: String;


  constructor(public afAuth: AngularFireAuth, public router: Router) {
    let status;
    setInterval( () => {
      status = localStorage.getItem('isLoggedIn');
      this.isLoggedIn = status === 'true';
    }, 1000);
  }

  logout() {
    this.afAuth.auth.signOut();
    this.isLoggedIn = false;
    localStorage.setItem('isLoggedIn', 'false');

    localStorage.setItem('email', '' );
    localStorage.setItem('uid', '' );

    this.router.navigate(['/login']);
  }


}