import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuPage } from '../home/menu';


@Component({
  selector: 'page-home',
  templateUrl: 'your-info.html'
})
export class yourInfoPage {

  constructor(public navCtrl: NavController) {

  }

  openMenu(){
  		this.navCtrl.setRoot(MenuPage);

  }

}
