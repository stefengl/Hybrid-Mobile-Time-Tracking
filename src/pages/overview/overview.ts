import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TimeRecordModel } from '../../shared/models/time-record.model';
import { DataService } from '../../shared/services/data.service';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { Subscription } from 'rxjs/Subscription';
import { AuthenticationService } from '../../shared/services/authentication.service';


@IonicPage()
@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html',
})
export class OverviewPage {
  tags: string[] = [];
  categories: any;

  tagsSubscription: Subscription;
  categoriesSubscription: Subscription;

  newRecord: TimeRecordModel = {
    category: null,
    date: new Date(),
    time: null,
    tags: null,
    note: null,
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toast: ToastController,
    private data: DataService) { }


  ionViewDidLoad() {
    this.getData();
    this.handleSubscriptions();
  }

  ionViewDidUnload() {
    this.unsubscribe();
  }

  getData() {
    this.data.getTags();
    this.data.getCategories();
  }

  
  handleSubscriptions() {
    this.tagsSubscription = this.data.tags.subscribe((tags) => this.tags = [...tags])
    this.categoriesSubscription = this.data.categories.subscribe((categories) => this.categories = [...categories])
  }
  
  unsubscribe() {
    this.tagsSubscription.unsubscribe();
    this.categoriesSubscription.unsubscribe();
  }


  resetTimeRecord() {
    this.newRecord.category = '';
    this.newRecord.note = '';
    this.newRecord.tags = [];
    this.newRecord.time = 0;
  }

  displayToast(msg: string) {
    let t = this.toast.create({
      message: msg,
      duration: 2000
    })
    t.present();
  }

  saveTimeRecord() {
    let messageInfo = 'Invalid form';

    const isValid: boolean = this.isEntryValid();
    if (isValid) {

      this.data.addRecord(this.newRecord);
      messageInfo = 'Saved Record';
    }

    this.displayToast(messageInfo);
  }

  private isEntryValid(): boolean {
    let isValid = false;

    if (this.newRecord.date && this.newRecord.category && this.newRecord.time) {
      isValid = true;
    }

    return isValid;
  }
}
