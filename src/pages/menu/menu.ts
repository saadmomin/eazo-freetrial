import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
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
  userProfilePic: string;
  userFullName: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    private facebook: Facebook,
    private google: GooglePlus,
    private socialSharing: SocialSharing
  ) {

    this.storage.ready().then(() => {
      this.storage.get('facebookUser').then((facebookUserData) => {
        console.log(facebookUserData);
        if(facebookUserData) {
        console.log('Facebook User Present');
        console.log(facebookUserData);
        this.userProfilePic = facebookUserData.picture;
        this.userFullName = facebookUserData.username;
      } else {
        this.storage.get('googleUser').then((googleUserData) => {
          console.log('Google User Present');
          console.log(googleUserData);
          this.userProfilePic = googleUserData.imageUrl;
          this.userFullName = googleUserData.displayName;
        })
      }
      })
  })

    this.pages = [
      { text: 'Home', icon: 'home', Component: HomePage },
      { text: 'Details Form', icon: 'information-circle', Component: 'DetailsFormPage' },
      { text: 'Contact Us', icon: 'mail', Component: 'ContactPage' },
      { text: 'History', icon: 'paper', Component: 'HistoryPage' },
      { text: 'My Profile', icon: 'contact', Component: 'UserProfilePage' },
      { text: 'Terms and Conditions', icon: 'paper', Component: 'TermsPage' }
    ]

  }

  ngOnInit() {
    
  }

  openPage(page) {
    this.rootPage = page.Component;
    this.childNavCtrl.setRoot(page.Component);
  }

  logout() {
    console.log('Logout Successful')
    this.storage.set('loginStatus', false)
    this.storage.remove('facebookUser').then(() => {console.log('Facebook user deleted');});
    this.storage.remove('googleUser').then(() => {console.log('Google user deleted');});
    this.navCtrl.setRoot('LoginPage');

    // this.storage.get('currentUser').then((data) => {
    //   if(data.googleLoggedin) {
    //     this.google.logout()
    //       .then(() => {
    //         this.storage.remove('currentUser');
    //         console.log('Google Logout!!');
    //         this.navCtrl.setRoot('LoginPage');
    //       })
    //   } else {
    //     this.facebook.logout().then(() => {
    //       this.storage.remove('currentUser');
    //       console.log('Facebook Logout!!');
    //       this.navCtrl.setRoot('LoginPage');
    //     })
    //   }
    // })
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
