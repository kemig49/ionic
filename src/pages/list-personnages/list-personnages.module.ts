import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListPersonnagesPage } from './list-personnages';

@NgModule({
  declarations: [
    ListPersonnagesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListPersonnagesPage),
  ],
})
export class ListPersonnagesPageModule {}
