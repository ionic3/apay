import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,Platform ,AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AccountProvider } from '../../providers/server/account';
import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	form = {};
	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		public toastCtrl: ToastController,
		public alertCtrl: AlertController,
		public platform: Platform,
		public loadingCtrl: LoadingController,
		public AccountServer : AccountProvider,
		public storage: Storage,
		) {
	}

	SignUp(){
		this.navCtrl.setRoot(RegisterPage);
	}
	ForgotPassword(){
		this.navCtrl.setRoot(ForgotPasswordPage);
	}


	SubmitForm() {
		if (this.form['email'] == '' || this.form['email'] == undefined)
		{
			this.AlertToast('The login email cannot be empty','error_form');
		}
		else
		{
			if (this.form['password'] == '' || this.form['password'] == undefined)
			{
				this.AlertToast('The login password cannot be empty','error_form');
			}
			else
			{
				let loading = this.loadingCtrl.create({
				    content: 'Please wait...'
			  	});

			  	loading.present();

			  	this.AccountServer.Login(this.form['email'],this.form['password'])
		        .subscribe((data) => {
		        	loading.dismiss();
					if (data.status == 'complete')
					{
						this.storage.set('customer_id', data.customer_id); 
						this.navCtrl.setRoot(TabsPage);

					}
					else
					{
						this.AlertToast(data.message,'error_form');
					}
		        },
		        (err) => {
		        	loading.dismiss();
		        	if (err)
		        	{
		        		this.SeverNotLogin();
		        	}
		        })
			}
		}
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

	ionViewDidLoad() {
		console.log('ionViewDidLoad LoginPage');
	}

}
