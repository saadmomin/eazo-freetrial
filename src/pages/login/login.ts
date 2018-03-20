import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  userData: any;
  LoggedIn: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private facebook: Facebook,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private google: GooglePlus,
    private storage: Storage) {
  }

  

  loginwithFacebook() {
    let loading = this.loadingCtrl.create({
      content: 'Logging you in via Facebook'
    })
    loading.present();
    this.facebook.login(['email', 'public_profile'])
      .then((response: FacebookLoginResponse) => {

        this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', [])
          .then(profile => {
            this.userData = { email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name'] }
            console.log('Facebook Login Successful!!');
            this.storage.ready().then(() => {
              this.storage.remove('currentUser');
              this.storage.get('currentUser').then((data) => {
                if(!data) {
                  let storageData = {
                    userdata: this.userData
                  }
                  this.storage.set('currentUser', storageData);
                  
                } else {
                  return null;
                }
              })
            })
            this.navCtrl.setRoot('MenuPage');
            loading.dismiss();
          })
      })
      .catch((error) => {
        let alert = this.alertCtrl.create({
          title: 'Login Error',
          subTitle: 'There was an error while logging into Facebook',
          message: error.message,
          buttons: [
            {
              text: 'Ok',
              handler: () => { },
              role: 'cancel'
            }
          ]
        })

        alert.present();
        loading.dismiss();
        console.log(error);
      })
  }

  loginWithGoogle() {
    let loading = this.loadingCtrl.create({
      content: 'Logging you in via Google'
    })
    loading.present();
    this.google.login({})
      .then((response) => {
        this.userData = response;
        this.storage.ready().then(() => {
          this.storage.remove('currentUser');
          this.storage.get('currentUser').then((data) => {
            if(!data) {
              let storageData = {
                userdata: this.userData,
                googleLoggedin: true
              }
              this.storage.set('currentUser', storageData);
              
            } else {
              return null;
            }
          })
        })
        this.navCtrl.setRoot('MenuPage', { data: this.userData });
        loading.dismiss();
      })
      .catch((error) => {
        let alert = this.alertCtrl.create({
          title: 'Login Error',
          subTitle: 'There was an error while logging into Google',
          message: error.message,
          buttons: [
            {
              text: 'Ok',
              handler: () => { },
              role: 'cancel'
            }
          ]
        })

        alert.present();
        loading.dismiss();
        console.log(error);
      })
  }

  openSignUpPage() {
    this.navCtrl.push('SignUpPage');
  }



}
