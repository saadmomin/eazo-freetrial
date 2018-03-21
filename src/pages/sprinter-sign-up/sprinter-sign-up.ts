import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-sprinter-sign-up',
  templateUrl: 'sprinter-sign-up.html',
})
export class SprinterSignUpPage {

  profileImgSrc = './assets/imgs/default-profile.png';
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {
  }

  openCamera() {
    let options: CameraOptions = {
      quality: 100,
      targetWidth: 900,
      targetHeight: 600,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: false,
      allowEdit: true,
      sourceType: 1
    }
    this.camera.getPicture(options)
      .then(imageData => {
        let base64 = 'data:/image/jpeg;base64,' + imageData;
        console.log(base64);
      }, (error) => {
        console.log(error);
      })
  }

  

}
