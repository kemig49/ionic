import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CelebrityPage } from '../celebrity/celebrity';
import { CardsPage } from '../cards/cards';
import { AddPersonnagePage } from '../add-personnage/add-personnage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

nextPage = CelebrityPage;
nextPage2 = CardsPage; 
personnage = AddPersonnagePage;
  constructor(public navCtrl: NavController) {


  }
 

}
