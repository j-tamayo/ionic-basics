import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UsersPage } from '../users/users';
import { ShopPage } from '../shop/shop';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // usrPage = UsersPage;
  // shopPage = ShopPage;

  constructor(public navCtrl: NavController) {

  }

  onGoToUsers() {
    this.navCtrl.push(UsersPage)
      .then((data) => {
        if(!data) {
          console.log('Access denied, Argument was ' + data);
        }
      });
  }

  onGoToShop() {
    this.navCtrl.push(ShopPage);
  }

}
