import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus} from '@ionic-native/google-plus';
import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  @ViewChild('content') childNavCtrl: NavController;
    
  rootPage: string;
  pages = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private storage: Storage,
    private facebook: Facebook,
    private google: GooglePlus,
    private socialSharing: SocialSharing
  ) {

   this.pages = [
      { text: 'Home', Component: HomePage },
      { text: 'Details Form', Component: 'DetailsFormPage' },
      { text: 'Contact Us', Component: 'ContactPage' },
      { text: 'History', Component: 'HistoryPage' },
      { text: 'My Profile', Component: 'UserProfilePage'},
    ]
  }

  openPage(page) {
    this.rootPage = page.Component;
    this.childNavCtrl.setRoot(page.Component);
  }

  logout() {
    this.storage.get('currentUser').then((data) => {
      if(data.googleLoggedin == true) {
        this.google.logout()
          .then(() => {
            this.storage.remove('currentUser');
            console.log('Google Logout!!');
            this.navCtrl.setRoot('LoginPage');
          })
      } else {
        this.facebook.logout().then(() => {
          this.storage.remove('currentUser');
          console.log('Facebook Logout!!');
          this.navCtrl.setRoot('LoginPage');
        })
      }
    })
  
  }

  shareviaWhatsApp() {
    let options = {
      message: 'Download the EAZO App!!',
      subject: 'Eazo Free Trial',
      file: './assets/imgs/eazo-logo.png',
      url: 'http://www.google.com'
    }
    this.socialSharing.shareWithOptions(options);
  }

  



}
