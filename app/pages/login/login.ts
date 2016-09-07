/**
 * Created by zrit on 16/9/7.
 */
import {Component} from '@angular/core';
import {ModalController,ViewController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/login/login.html'
})
export class login {
  constructor(public modalCtrl: ModalController,public VC:ViewController) {

    this.modalCtrl = modalCtrl;
    this.VC = VC;
  }

  dissmis(){

    this.VC.dismiss();
  }

}
