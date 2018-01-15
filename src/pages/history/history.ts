import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { DataService } from '../../shared/services/data.service';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { TimeRecordModel } from '../../shared/models/time-record.model';
import { TimeRecordGroupModel } from '../../shared/models/time-record-group.model';
import { TimeRecordBundlerService } from '../../shared/services/time-record-bundler.service';

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  dailyRecordBundles: TimeRecordGroupModel[];
  records: TimeRecordModel[];

  loading: any;

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    private data: DataService,
    private bundler: TimeRecordBundlerService
  ) { }

  ionViewDidLoad() {
    this.loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'We are currently looking for your entries'
    })

    this.loading.present();

    this.data.getRecords();
    this.data.timerecords.subscribe((timerecords) => {
      const parsedRecords = this.parseStringToDate(timerecords)
      this.records = [...parsedRecords]
      this.loading.dismiss();
      this.dailyRecordBundles = this.bundler.groupRecordsByDate(this.records);
    })
  }


  parseStringToDate(timerecords: TimeRecordModel[]): TimeRecordModel[] {
    const parsedRecords = timerecords.map((t: TimeRecordModel) =>
      Object.assign({}, t, { date: new Date(t.date) })
    );

    return parsedRecords;
  }



  deleteRecord(record: TimeRecordModel) {
    console.warn('#TODO \t Remove ' + JSON.stringify(record));
  }

}
