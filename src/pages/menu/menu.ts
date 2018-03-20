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
      { text: 'Home', icon: 'home', Component: HomePage },
      { text: 'Details Form', icon: 'information-circle', Component: 'DetailsFormPage' },
      { text: 'Contact Us', icon: 'mail', Component: 'ContactPage' },
      { text: 'History', icon: 'paper', Component: 'HistoryPage' },
      { text: 'My Profile', icon: 'contact', Component: 'UserProfilePage'},
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
      file: 'https://www.getztechtechnologies.com/img/about/getz.png',
      url: 'https://www.getztechtechnologies.com/'
    }
    this.socialSharing.shareWithOptions(options);
  }

  



}
