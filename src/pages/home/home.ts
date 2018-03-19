import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private loadingCtrl: LoadingController) {

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
