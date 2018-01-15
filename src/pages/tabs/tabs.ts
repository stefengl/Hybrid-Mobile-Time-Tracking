import { Component } from '@angular/core';
import { OverviewPage } from '../overview/overview';
import { SettingsPage } from '../settings/settings';
import { HistoryPage } from '../history/history';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = OverviewPage;
  tab2Root = HistoryPage;
  tab3Root = SettingsPage;


  constructor() { }

  ionViewCanEnter() { }

  ionViewDidLoad() { }

}
