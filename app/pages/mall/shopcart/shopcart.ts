/**
 * Created by zrit on 16/9/8.
 */
import {Component} from '@angular/core';
import {ModalController,ViewController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/mall/shopcart/shopcart.html'
})
export class ShopCartPage {


  constructor(public modalCtrl:ModalController,public VC:ViewController) {

  }

  dismiss(){

    this.VC.dismiss();
  }

}
