import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare interface Transaction {
  productName: string;
  transactionDate: string;
  trialDeposit: number;
  sellerName: string;
  transitStatus: string;
}

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  transactionsArr: Array<Transaction>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.transactionsArr = [
      {
        productName: 'iPhone 7',
        transactionDate: '10/03/2018',
        trialDeposit: 7500,
        sellerName: 'ExpensiveStuff78',
        transitStatus: 'In Transit'
      },
      {
        productName: 'Bajaj Pulsar 220DTSi',
        transactionDate: '02/03/2018',
        trialDeposit: 23000,
        sellerName: 'IAmMechanic23',
        transitStatus: 'Processing'
      },
      {
        productName: 'Apple Macbook Pro 128Gb',
        transactionDate: '28/02/2018',
        trialDeposit: 1200,
        sellerName: 'NoCompetition2016',
        transitStatus: 'Shipped'
      },
      {
        productName: 'Hyundai Santro CNG',
        transactionDate: '15/02/2018',
        trialDeposit: 34000,
        sellerName: 'LongRunner21',
        transitStatus: 'Completed'
      },
      {
        productName: 'MI Powerbank 2000MAh',
        transactionDate: '10/3/2018',
        trialDeposit: 800,
        sellerName: 'Value4Money',
        transitStatus: 'Completed'
      }
    ]
  }

  ngOnInit() {
    
  }

}
