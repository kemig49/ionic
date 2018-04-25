import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListPersonnagesPage } from '../list-personnages/list-personnages';

/**
 * Generated class for the AddPersonnagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-personnage',
  templateUrl: 'add-personnage.html',
})
export class AddPersonnagePage {
 listPersonnages = ListPersonnagesPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPersonnagePage');
  }

}
