import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { LangPage } from '../home/select-lang';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public viewCtrl: ViewController) {

  }

  getSelectLangPage() {
  		this.navCtrl.push(LangPage);
  }

}
