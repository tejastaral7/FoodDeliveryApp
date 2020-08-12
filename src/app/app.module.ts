import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LangPage } from '../pages/home/select-lang';
import { mainApp } from '../pages/home/main-app';
import { yourInfoPage } from '../pages/home/your-info';
import { MenuPage } from '../pages/home/menu';
import { ItemsPage } from '../pages/home/items';
import { ModalPage } from '../pages/home/modal';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LangPage,
    mainApp,
    yourInfoPage,
    MenuPage,
    ItemsPage,
    ModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LangPage,
    mainApp,
    yourInfoPage,
    MenuPage,
    ItemsPage,
    ModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
