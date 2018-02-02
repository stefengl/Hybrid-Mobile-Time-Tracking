import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { RegistrationPage } from '../registration/registration';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { TabsPage } from '../tabs/tabs';
import { LoginModel } from '../../shared/models/login.model';
import { EnvConfig } from '../../environment';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: LoginModel = {
    email: '',
    password: ''
  }

  env: string = (EnvConfig.production) ? "Production" : "Development";

  constructor(
    public navCtrl: NavController,
    private auth: AuthenticationService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  navToRegistration() {
    this.navCtrl.push(RegistrationPage);
  }

  authenticate() {
    this.auth.authenticate(this.user)
      .then(() => {
        this.navCtrl.push(TabsPage)
      })
  }

}
