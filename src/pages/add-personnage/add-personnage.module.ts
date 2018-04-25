import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPersonnagePage } from './add-personnage';

@NgModule({
  declarations: [
    AddPersonnagePage,
  ],
  imports: [
    IonicPageModule.forChild(AddPersonnagePage),
  ],
})
export class AddPersonnagePageModule {}
