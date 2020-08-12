import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { NavController } from 'ionic-angular';
import { LangPage } from '../home/select-lang';
import { HomePage } from '../home/home';
import { yourInfoPage } from '../home/your-info';
import { MenuPage } from '../home/menu';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  selector: 'page-home',
  templateUrl: 'main-app.html'
})
export class mainApp {
	 @ViewChild(Nav) nav: Nav;
	 rootPage = yourInfoPage;
	 pages: Array<{title: string,icon:string, component: any}>;

  constructor(public menu: MenuController,public navCtrl: NavController,public platform: Platform,public statusBar: StatusBar,public splashScreen: SplashScreen) {
  this.initializeApp();

  this.pages = [
      { title: 'Landing Page',icon:'home' ,component:yourInfoPage  },
      { title: 'User info',icon:'information-circle', component:yourInfoPage  },
      { title: 'Food Categories',icon:'apps', component:MenuPage  },
      { title: 'Cart',icon:'cart', component:yourInfoPage  },
      { title: 'Delivery Confirmation',icon:'basket', component:yourInfoPage  },
      { title: 'Payment',icon:'flame', component:yourInfoPage  },
      { title: 'Delivery Tracking',icon:'paper-plane', component:yourInfoPage  },
      { title: 'Settings',icon:'settings', component:yourInfoPage  },
      { title: 'Contact',icon:'contact', component: yourInfoPage },
      { title: 'About Us',icon:'alert', component: yourInfoPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}