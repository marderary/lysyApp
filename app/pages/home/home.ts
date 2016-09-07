import {Component} from '@angular/core';
import {ModalController} from 'ionic-angular';
import {jiazheng} from "../jiazheng/jiazheng";

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {


  constructor(public modalCtrl:ModalController) {

  }

  jzClick(e){
    console.log("12131");
    let modal = this.modalCtrl.create(jiazheng);
    modal.present();

  }
}
