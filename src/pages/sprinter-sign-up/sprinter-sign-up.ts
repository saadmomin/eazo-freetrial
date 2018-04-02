import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DomSanitizer } from '@angular/platform-browser';
 
@IonicPage()
@Component({
  selector: 'page-sprinter-sign-up',
  templateUrl: 'sprinter-sign-up.html',
})
export class SprinterSignUpPage {

  cameraImgPresent: boolean = false;
  cameraprofileImg: string;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private domSanitizer: DomSanitizer) {
  }

  openCamera() {
    let options: CameraOptions = {
      quality: 100,
      targetHeight: 500,
      targetWidth: 500,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      cameraDirection: 1
    }
    this.camera.getPicture(options)
      .then(imageData => {
        this.cameraprofileImg = 'data:/image/jpeg;base64, ' + imageData;
        this.cameraImgPresent = true;
        console.log(this.cameraprofileImg);

      }, (error) => {
        console.log(error);
      })
  }

  openTermsPage() {
    this.navCtrl.push('TermsPage');
  }

  

}
