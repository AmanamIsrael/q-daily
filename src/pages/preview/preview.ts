import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-preview',
  templateUrl: 'preview.html',

})
export class PreviewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams , public viewCtrl: ViewController) {
  }


  removePreview(){
    this.viewCtrl.dismiss();
  }




}


