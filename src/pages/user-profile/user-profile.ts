import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {

  currentUser: any;
  isFacebookLoggedIn: boolean = false;
  

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage) {

    this.storage.ready().then(() => {
      this.storage.get('currentUser')
        .then((data) => {
          this.currentUser = data;
          console.log(this.currentUser);
          if(data.googleLoggedin == true) {
            this.isFacebookLoggedIn = false;
            console.log(this.isFacebookLoggedIn);
          } else {
            this.isFacebookLoggedIn = true;
            console.log(this.isFacebookLoggedIn);
          }
        })
    })
  }



}
