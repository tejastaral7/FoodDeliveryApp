import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ModalPage } from '../home/modal';

@Component({
  selector: 'page-home',
  templateUrl: 'items.html'
})
export class ItemsPage {

	items:Array<{title:string,image:string,itemInfo:string,price:string,count:number,id:number}>;
  constructor(public navCtrl: NavController,public alertCtrl: AlertController,public modalCtrl: ModalController) {
  		this.items=[
  		{title:'Double Cheese Burger',image:'assets/imgs/cheeseBurger.jpg',itemInfo:'BBQ chicken patty,smoked chicken layer,cheese',price:'$180',count:0,id:0}
  		];
  }

  presentModal() {
    const modal = this.modalCtrl.create(ModalPage,this.items);
    modal.present();
  }

  

}