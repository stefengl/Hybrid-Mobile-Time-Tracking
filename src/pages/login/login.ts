import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistrationPage } from '../registration/registration';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { TabsPage } from '../tabs/tabs';
import { LoginModel } from '../../shared/models/login.model';


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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
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
