import {Component} from '@angular/core';
import {ModalController} from 'ionic-angular';
import  {login} from '../login/login';

@Component({
  templateUrl: 'build/pages/person/person.html'
})
export class PersonPage {
  constructor(private modalCtrl: ModalController) {
  }

  loginClick() {
    let modal = this.modalCtrl.create(login);
    modal.present();

  }
}
