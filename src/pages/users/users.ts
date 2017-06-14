import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UserPage } from './user/user';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  constructor (private navCtrl: NavController) {

  }

  onLoadUser(name: string) {
    this.navCtrl.push(UserPage, {userName: name});
  }

  ionViewCanEnter(): boolean | Promise<boolean> {
    console.log('ionViewCanEnter');
    const rnd = Math.random();
    console.log(rnd > 0.5);
    return rnd > 0.5;
  }

  ionVIewDidLoad() {
    console.log('ionViewDidLoad');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
  }

  ionViewCanLeave(): boolean | Promise<boolean> {
    console.log('ionViewCanLeave');
    const promise = new Promise ((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });

    return promise;
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }

  ionViewWillUnload() {
    console.log('ionViewWillUnload');
  }
}
