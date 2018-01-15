import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { LoginPage } from '../login/login';
import { Page } from 'ionic-angular/navigation/nav-util';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  loginpage: Page = LoginPage;

  constructor(
    public navCtrl: NavController,
    private auth: AuthenticationService) {
  }

  ionViewDidLoad() { }

  logout() {
    this.navCtrl.push(this.loginpage)
      .then(() => this.auth.logout())
  }

}
