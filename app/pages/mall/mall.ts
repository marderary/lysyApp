/**
 * Created by zrit on 16/9/7.
 */
import {Component} from '@angular/core';
import {ModalController,ViewController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/mall/mall.html'
})
export class MallPage {


  constructor(public modalCtrl:ModalController,public VC:ViewController) {

  }

  dissmiss(){

    this.VC.dismiss();
  }

}
