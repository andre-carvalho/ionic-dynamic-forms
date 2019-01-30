import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { StorageMedia, Media, StoreMidiaProvider } from '../../providers/store-midia/store-midia';
import { HomePage } from '../home/home.page';

/**
 * Generated class for the ConfigPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})
export class ConfigPage {

  midias: Array<StorageMedia>;
  media: Media;
  key: string;

  options: CameraOptions = {
    quality: 30,
    destinationType: Camera.DestinationType.FILE_URI,
    sourceType: Camera.PictureSourceType.CAMERA, //Source is camera
    allowEdit: false, // Allow user to edit before saving
    mediaType: Camera.MediaType.PICTURE,
    encodingType: Camera.EncodingType.JPEG, // Save as JPEG
    targetWidth: 300,
    targetHeight: 300,
    saveToPhotoAlbum: true, // Album save opton
    correctOrientation: true // Camera orientation  
  }

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public toast: ToastController,
    public camera: Camera,
    public storageProvider: StoreMidiaProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigPage');
  }

  cameraSuccess(imageData: string):void {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64:
    //this.media.data = 'data:image/png;base64,' + imageData;
    this.media.data = imageData;
  }

  cameraError(error: string):void {
    console.log('Error on taking photo', error);
    this.toast.create({ message: 'Falhou ao acionar a camera de seu dispositivo.', duration: 1500, position: 'botton' }).present();
  }

  takePicture(event:any) {
    this.camera.getPicture(this.cameraSuccess, this.cameraError, this.options);
  }

  recordVideo(event:any) {

  }

  recordAudio(event:any) {

  }

  cancel(event:any) {
    let alert = this.alertCtrl.create({
			title: 'Bye!',
			subTitle: 'See you later.',
			buttons: ['OK']
		});
    alert.present();
    this.navCtrl.push(HomePage);
    console.log("See you later!");
  }
}
