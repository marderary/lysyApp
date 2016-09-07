/**
 * Created by zrit on 16/9/6.
 */
import {Component} from '@angular/core';
import {ViewController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/jiazheng/jiazheng.html'
})
export class jiazheng {

  constructor(private VC: ViewController) {

    this.VC = VC;
  }

  dissmis(){

    this.VC.dismiss();
  }

}
