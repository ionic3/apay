import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,Platform ,AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AccountProvider } from '../../../providers/server/account';

import { Storage } from '@ionic/storage';
import { VerifyEmailPage } from '../../settings/verify-email/verify-email';
import { ModifyPasswordPage } from '../../settings/modify-password/modify-password';
import { AuthenticatorPage } from '../../settings/authenticator/authenticator';
import { AuthenticatorLoginPage } from '../../settings/authenticator-login/authenticator-login';
import { AboutUsPage } from '../../settings/about-us/about-us';
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
	customer_id : any;
	infomation = {};
	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		public toastCtrl: ToastController,
		public alertCtrl: AlertController,
		public platform: Platform,
		public loadingCtrl: LoadingController,
		public storage: Storage,
		public AccountServer : AccountProvider
	) {
		
	}

	ionViewDidLoad() {
		
		
		
				
	}

	ionViewWillEnter() {
		let loading = this.loadingCtrl.create({
	    	content: 'Please wait...'
	  	});
	  	loading.present();
	  	this.storage.get('customer_id')
		.then((customer_id) => {
			if (customer_id) 
			{
				this.customer_id = customer_id;
				this.AccountServer.GetInfomationUser(this.customer_id)
		        .subscribe((data) => {
		        	loading.dismiss();	
					if (data.status == 'complete')
					{
						this.infomation = data;
						this.infomation['status_verited'] = data.security.email.status;
						this.infomation['status_2fa'] = data.security.authenticator.status;
						
						console.log(this.infomation);
					}
					else
					{
						this.AlertToast(data.message,'error_form');
					}
				})
			}
		})
				
		let elements = document.querySelectorAll(".tabbar.show-tabbar");
		if (elements != null) {
	        Object.keys(elements).map((key) => {
	            elements[key].style.display = 'none';
	        });
	    }
   	}
  	ionViewWillLeave() {
  		let elements = document.querySelectorAll(".tabbar.show-tabbar");
		if (elements != null) {
	        Object.keys(elements).map((key) => {
	            elements[key].style.display = 'flex';
	        });
	    }
  	}

  	ViewVerifyEmail(){
  		if (parseInt(this.infomation['status_verited']) == 0)
  		{
  			this.navCtrl.push(VerifyEmailPage ,{'customer_id' : this.customer_id});
  		}
  	}

  	ViewModifyPassword(){
		this.navCtrl.push(ModifyPasswordPage ,{'customer_id' : this.customer_id});
  	}
  	ViewAuthenticator(){
		this.navCtrl.push(AuthenticatorPage ,{'customer_id' : this.customer_id});
  	}
  	AuthenticatorLogin(){
		this.navCtrl.push(AuthenticatorLoginPage ,{'customer_id' : this.customer_id});
  	}
  	
  	AboutUs(){
		this.navCtrl.push(AboutUsPage ,{'customer_id' : this.customer_id});
  	}
  	
  	 
  	

	AlertToast(message,class_customer) {
	    let toast = this.toastCtrl.create({
	      message: message,
	      position: 'bottom',
	      duration : 2000,
	      cssClass : class_customer
	    });
	    toast.present();
  	}

  	SeverNotLogin(){
  		const confirm = this.alertCtrl.create({
		title: 'System maintenance',
		message: 'The system is updating. Please come back after a few minutes',
		buttons: [
		{
		  text: 'Cancel',
		  handler: () => {
		    
		  }
		},
		{
		  text: 'Exit',
		  handler: () => {
		   	this.platform.exitApp();
		  }
		}
		]
		});
		confirm.present();
  	}

  	goback() {
		this.navCtrl.pop();
	}
	
}
