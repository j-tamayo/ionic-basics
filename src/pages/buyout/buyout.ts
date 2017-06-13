import { Component, OnInit } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

@Component({
  selector: 'page-buyout',
  templateUrl: 'buyout.html'
})
export class BuyoutPage {
  productName: string;

  constructor (
    private navParams: NavParams,
    private navCtrl: NavController
  ) {

  }

  ngOnInit() {
    this.productName = this.navParams.get('productName');
  }

  onGoMain() {
    this.navCtrl.popToRoot();
  }
}
