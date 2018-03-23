import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private loadingCtrl: LoadingController, private storage: Storage) {
    this.storage.ready()
      .then(() => {
        this.storage.get('facebookUser')
          .then((data) => {
            console.log(data);
          })
      })
  }

  ionViewDidLoad() {
    this.showLoading();
  }

  showLoading() {
    let loading = this.loadingCtrl.create({
      content: 'Fetching Data from OLX'
    })

    loading.present();

    setTimeout(() => {
      loading.dismiss()
    }, 100);


  }


  continue() {
    
  }

}
