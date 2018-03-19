import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Facebook } from '@ionic-native/facebook';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;
  isLoggedIn: boolean = false;


  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private facebook: Facebook,
    private storage: Storage) {

    platform.ready().then(() => {

      this.facebook.getLoginStatus()
        .then(res => {
          this.storage.get('currentUser')
            .then((data) => {
              console.log(data);
              if (data) {
                this.isLoggedIn = true;
              } else {
                this.isLoggedIn = false;
              }
              if (res.status == "connected" || this.isLoggedIn == true) {
                this.rootPage = 'MenuPage';
              } else {
                
                this.rootPage = 'LoginPage';
              }
            })
        })
        .catch(error => {
          console.log(error);
        })


      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

