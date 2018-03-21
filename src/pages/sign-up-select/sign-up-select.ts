import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-sign-up-select',
  templateUrl: 'sign-up-select.html',
})
export class SignUpSelectPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openCustomerSignUp() {
    this.navCtrl.push('SignUpPage');
  }

  openSprinterSignUp() {
    this.navCtrl.push('SprinterSignUpPage')
  }

}
