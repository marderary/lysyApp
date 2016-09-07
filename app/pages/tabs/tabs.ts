import {Component} from '@angular/core';
import {HomePage} from '../home/home';
import {ComplainPage} from '../complain/complain';
import {OrderPage} from '../order/order';
import {PersonPage} from '../person/person';

import {Tabs} from 'ionic-angular';
import {Injectable,ViewChild} from '@angular/core';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  @ViewChild('myTabs') tabRef:Tabs;

  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;
  private tab4Root: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = HomePage;
    this.tab2Root = ComplainPage;
    this.tab3Root = OrderPage;
    this.tab4Root = PersonPage;
  }

  ionViewDidEnter(){

    this.tabRef.select(0);

  }
}
