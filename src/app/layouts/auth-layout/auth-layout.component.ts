import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from '../../components/sidebar/sidebar.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SocialAuthService } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { AuthenticationService } from "./../../services/authentication.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit {
  
  private user: SocialUser;

  constructor(
    private _socialAuthService: SocialAuthService,
    private _authService: AuthenticationService,
    private _route : Router,
    public _toastr : ToastrService,
  ) { 
  }

  ngOnInit(): void { }

  signInWithGoogle(): void {
    this._socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this._socialAuthService.authState.subscribe((user) => {
      this.user = user;
      console.log(user);
      this._authService.login(this.user).subscribe((res:any) => {
        if (res.result) {
          Object.keys(res.data.user[0]).forEach((key) => {
            this._authService.loggedIn[key] = res.data.user[0][key]; 
          });
          Object.keys(res.data).forEach((key) => {
            if (typeof key != 'object') this._authService.loggedIn[key] = res.data[key];
          });
          if (this._authService.loggedIn.status != -1) {
            this._route.navigate(['dashboard']);
            this._toastr.success(`Welcome ${this._authService.loggedIn.name}`, 'Notification');
          } else {
            this._toastr.error('Your user has been blocked', 'Notification')
          }
        } else {
          this._authService.loggedIn.authenticated = (user != null);
          this._authService.loggedIn.role = null;
        }
      });
    });
  }

  signOut(): void {
    this._socialAuthService.signOut();
  }
}
