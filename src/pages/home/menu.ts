import { Component } from '@angular/core';
import { NavController,ViewController } from 'ionic-angular';
import { ItemsPage } from '../home/items';

@Component({
  selector: 'page-home',
  templateUrl: 'menu.html'
})
export class MenuPage {

  constructor(public navCtrl: NavController,public viewCtrl:ViewController) {
  }

  getItems()
  {
  	this.navCtrl.push(ItemsPage);
  }

}
