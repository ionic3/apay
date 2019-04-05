import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,Platform ,AlertController,InfiniteScroll,Refresher } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AccountProvider } from '../../../providers/server/account';
import { Storage } from '@ionic/storage';

import { QrcodePartnerPage } from '../../profile/qrcode-partner/qrcode-partner';
import { MyPartnerPage } from '../../profile/my-partner/my-partner';
import { AddNewWalletPage } from '../../contact/add-new-wallet/add-new-wallet';
import { EaningsPage } from '../../eanings/eanings/eanings';
import { LoginPage } from '../../login/login';
import { SettingsPage } from '../../settings/settings/settings';
import { RecordsExchangePage } from '../../profile/records-exchange/records-exchange';

import { ContactUsPage } from '../../contact-us/contact-us/contact-us';

import { Camera } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
	customer_id : any;
	infomation = {};
	img_camera = '';
	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		public toastCtrl: ToastController,
		public alertCtrl: AlertController,
		public platform: Platform,
		public loadingCtrl: LoadingController,
		public storage: Storage,
		public AccountServer : AccountProvider,
		private camera: Camera,
    	private transfer: FileTransfer,
		) {
	}
	private fileTransfer: FileTransferObject = this.transfer.create();
	ionViewDidLoad() {

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
						this.infomation['email'] = data.email;
						this.infomation['img_profile'] =  data.img_profile;
					}
				})
			}
		})
	}

	clickImage() {
    this.camera.getPicture({
        quality: 50,
        destinationType: this.camera.DestinationType.FILE_URI,
        sourceType: this.camera.PictureSourceType.CAMERA,
        encodingType: this.camera.EncodingType.JPEG
    }).then((imageData) => {
        let options: FileUploadOptions = {
            fileKey: "file",
            fileName: imageData.substr(imageData.lastIndexOf('/') + 1),
            chunkedMode: false,
            mimeType: "image/jpg"
        }
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();

        this.fileTransfer.upload(imageData, 'https://api.buy-sellpro.co/api/upload-img-profile/' + this.customer_id, options)
            .then((data) => {
                loading.dismiss();
                this.AlertComplete('Successful update.');
                this.img_camera = 'https://api.buy-sellpro.co/static/img/upload/' + options.fileName;
            }, (err) => {
                loading.dismiss();
                this.AlertToast('Please try again.')
            })
    }, (err) => {
        this.AlertToast('Please try again.')
    });
}

	ViewQrcodeAddPartner(){
		this.navCtrl.push(QrcodePartnerPage ,{'email' : this.infomation['email']});
	}

	ViewMyPartnerPage(){
		this.navCtrl.push(MyPartnerPage ,{'customer_id' : this.customer_id});
	}

	ViewEanings(){
		this.navCtrl.push(EaningsPage);
	}

	ViewAddWalletAddress(){
		this.navCtrl.push(AddNewWalletPage);
	}

	ViewRecordsExchange(){
		this.navCtrl.push(RecordsExchangePage,{'customer_id' : this.customer_id});
	}

	ViewContactUs(){
		this.navCtrl.push(ContactUsPage,{'customer_id' : this.customer_id});
		
	}
	ViewSettings(){
		this.navCtrl.push(SettingsPage);
		
	}
	Logout_Click() {
    const confirm = this.alertCtrl.create({
      title: 'Confirm Logout?',
      message: 'Are you sure you are logged out of the account',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Logout',
          handler: () => {
            this.storage.remove('customer_id');
            this.storage.remove('PinStorage');
            this.storage.remove('StatusPinStorage');
            this.navCtrl.setRoot(LoginPage);
          }
        }
      ]
    });
    confirm.present();

   
  	}

  	 AlertComplete(message) {
	    let toast = this.toastCtrl.create({
	      message: message,
	      position: 'bottom',
	      duration : 2000,
	      cssClass : 'success_form'
	    }); 
	    toast.present();
	}
	AlertToast(message) {
      let toast = this.toastCtrl.create({
        message: message,
        position: 'bottom',
        duration : 2000,
        cssClass : 'error_form'
      });
      toast.present();
    }
}
