import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'modal.html'
})
export class ModalPage {
	items;
  constructor(public navCtrl: NavController,params: NavParams) {
  		console.log(params);
  		this.items = params;
  		console.log(this.items);
  }

  incrCount(){
  	this.items.data[0].count= this.items.data[0].count + 1;
  }
  decrCount(){
  	this.items.data[0].count= this.items.data[0].count - 1;
  }

  pop(){
  		this.navCtrl.pop();
  }

}