import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-details-form',
  templateUrl: 'details-form.html',
})
export class DetailsFormPage {


  deliveryOption: any;
  event = {
    timeStarts: ''
  }
  daysToTry = 2;
  depositPerDay = 1500;
  totalAmount: number;


constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.totalAmount = this.daysToTry * this.depositPerDay;
}

totalAmountChange() {
  this.totalAmount = this.daysToTry * this.depositPerDay;
}

continue() {
  
}






   

  

}
