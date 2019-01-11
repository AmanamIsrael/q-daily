import { Component } from '@angular/core';
import { HomePage } from "../home/home";
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-slider',
  templateUrl: 'slider.html',
})
export class SliderPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  toTimeline(){
      this.navCtrl.setRoot(HomePage);

  }

}
