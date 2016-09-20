/**
 * Created by zrit on 16/9/8.
 */
import {Component,ViewChild} from '@angular/core';
import {ModalController,Tabs} from 'ionic-angular';
import {MallPage} from '../mall';
import {GoodsCategoryPage} from '../category/goodsCategory';
import {ShopPage} from '../shop/shop';
import {ShopCartPage} from '../shopcart/shopcart';
import {PersonPage} from '../../person/person';


@Component({
  templateUrl: 'build/pages/mall/tabs/malltabs.html'
})

export class MallTabsPage {

  @ViewChild('myTabs') tabRef:Tabs;


  private tab1Root:any;
  private tab2Root:any;
  private tab3Root:any;
  private tab4Root:any;
  private tab5Root:any;

  public isFirstTimeEnter:boolean = true;


  constructor(public modalCtrl:ModalController) {
    this.tab1Root = MallPage;
    this.tab2Root = GoodsCategoryPage;
    this.tab3Root = ShopPage;
    this.tab4Root = ShopCartPage;
    this.tab5Root = PersonPage;
  }

  ionViewLoaded(){
    console.log("ionViewLoaded");

}

  ionViewDidEnter(){
    console.log("ionViewDidEnter");

  }


}
