import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { mainApp } from '../home/main-app';



@Component({
  selector: 'page-home',
  templateUrl: 'select-lang.html'
})
export class LangPage {

  constructor(public navCtrl: NavController,public viewCtrl: ViewController) {

  }

  openMainApp(){
   this.navCtrl.push(mainApp);
      
  }

}
