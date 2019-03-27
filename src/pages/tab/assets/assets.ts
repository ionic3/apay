import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AssetsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-assets',
  templateUrl: 'assets.html',
})
export class AssetsPage {
	
	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		
	}

	onScroll(event){

		if (parseFloat(event.scrollTop) >= 68)
		{
			document.querySelector(".card_capit_header")['style'].opacity = '0';
			document.querySelector(".card_header")['style'].opacity = '1';
		}
		else{
			document.querySelector(".card_capit_header")['style'].opacity = '1';
			document.querySelector(".card_header")['style'].opacity = '0';
		}
		
	}
}
