/**
 * Created by zrit on 16/9/8.
 */
import {Component} from '@angular/core';
import {ModalController,ViewController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/mall/category/goodsCategory.html'
})
export class GoodsCategoryPage {

  constructor(public modalCtrl:ModalController,public VC:ViewController) {

  }
  dissmiss(){

    this.VC.dismiss();
  }

}
