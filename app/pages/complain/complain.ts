import {Component} from '@angular/core';
import {ViewChild} from '@angular/core';


import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/complain/complain.html'
})
export class ComplainPage {
  constructor(private navCtrl: NavController) {

  }

ionViewDidEnter(){
  console.log("q3");

}

}
