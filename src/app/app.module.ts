import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Card } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {CelebrityPage} from '../pages/celebrity/celebrity';
import {CardsPage} from '../pages/cards/cards';
import { ListPersonnagesPage } from '../pages/list-personnages/list-personnages';
import { AddPersonnagePage } from '../pages/add-personnage/add-personnage';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CelebrityPage,
    CardsPage,
    AddPersonnagePage,
    ListPersonnagesPage
  ],

  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CelebrityPage,
    CardsPage,
    AddPersonnagePage,
    ListPersonnagesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
