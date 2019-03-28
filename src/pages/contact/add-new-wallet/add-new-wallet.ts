import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddNewWalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-new-wallet',
  templateUrl: 'add-new-wallet.html',
})
export class AddNewWalletPage {
	form = {}; 	
	toppings = 'bacon';
	selectOptions : any;
	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.selectOptions = {
		  title: 'Pizza Toppings',
		  cssClass : 'select-customer'
		};
	}

	ionViewDidLoad() {
	console.log('ionViewDidLoad AddNewWalletPage');
	}

}
