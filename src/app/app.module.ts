// MODULES
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage'
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2'
import { AngularFireAuthModule } from 'angularfire2/auth'
import { AngularFireDatabaseModule } from 'angularfire2/database'

// DECLARATIONS
import { MyApp } from './app.component';
import { OverviewPage } from '../pages/overview/overview';
import { HistoryPage } from '../pages/history/history';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegistrationPage } from '../pages/registration/registration';


// PROVIDERS
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthenticationService } from '../shared/services/authentication.service';
import { DataService } from '../shared/services/data.service';
import { TimeRecordBundlerService } from '../shared/services/time-record-bundler.service';

// OTHER
const fireConfig: FirebaseAppConfig = {
  apiKey: 'AIzaSyAOFJrOoZGs6mtx1oQoKHET-zzb-PabLUw',
  authDomain: 'time-tracking-pwa.firebaseapp.com',
  databaseURL: 'https://time-tracking-pwa.firebaseio.com/',
  projectId: 'time-tracking-pwa',
  storageBucket: "time-tracking-pwa.appspot.com",
  messagingSenderId: "158405242512"
}

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    OverviewPage,
    HistoryPage,
    SettingsPage,
    LoginPage,
    RegistrationPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(fireConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    OverviewPage,
    HistoryPage,
    SettingsPage,
    LoginPage,
    RegistrationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthenticationService,
    DataService,
    TimeRecordBundlerService
  ]
})
export class AppModule { }
