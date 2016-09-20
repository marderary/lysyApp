import {Component} from '@angular/core';
import {ModalController,NavController,App} from 'ionic-angular';
import {jiazheng} from "../jiazheng/jiazheng";
import {MallPage} from "../mall/mall";
import {MallTabsPage} from '../mall/tabs/malltabs';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {


  constructor(public modalCtrl:ModalController,public navCtrl:NavController,public app:App) {

  }

  jzClick(e){
    console.log("家政被点击了");
    let modal = this.modalCtrl.create(jiazheng);
    modal.present();
  }

  mallClick(e){

    console.log("老年商城被点击了");

    // let modal = this.modalCtrl.create(MallTabsPage);
    // modal.present();
    //
    //this.navCtrl;
    this.app.getRootNav().push(MallTabsPage)
    //this.navCtrl.push(MallTabsPage);

  }
}
