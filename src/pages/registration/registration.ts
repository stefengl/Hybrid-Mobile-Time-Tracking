import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { TabsPage } from '../tabs/tabs';
import { RegisterModel } from '../../shared/models/register.model';

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {

  newUser: RegisterModel = {
    email: '',
    password: '',
    passwordConfirmation: ''
  }

  constructor(
    public navCtrl: NavController,
    private auth: AuthenticationService) {
  }

  ionViewDidLoad() { }


  registerNewUser() {
    console.log(this.newUser)

    this.auth.register(this.newUser).then(() => {
      this.navToLogin()
    });
  }

  navToLogin() {
    this.navCtrl.push(TabsPage)
  }
}
