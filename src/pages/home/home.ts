import { Component } from '@angular/core';
import { NavController, ModalController} from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modal: ModalController) {
  }
  presentModal(){
      const modal = this.modal.create('PreviewPage');
      modal.present();

  }

}
