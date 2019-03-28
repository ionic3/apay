import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

/*AI DOG*/
import { AidogPage } from '../pages/aidog/aidog/aidog';
import { AidogAddPage } from '../pages/aidog/aidog-add/aidog-add';
import { AidogRewardPage } from '../pages/aidog/aidog-reward/aidog-reward';
import { AidogRecordPage } from '../pages/aidog/aidog-record/aidog-record';
/*END AI DOG*/

/*AI DOG*/
import { PaymentPage } from '../pages/payment/payment/payment';
import { CollectPage } from '../pages/payment/collect/collect';
import { TransanctionsPage } from '../pages/payment/transanctions/transanctions';
/*END AI DOG*/

import { ExchangePage } from '../pages/exchange/exchange';
import { DepositPage } from '../pages/deposit/deposit';
import { WithdrawPage } from '../pages/withdraw/withdraw';
import { WalletPage } from '../pages/wallet/wallet';

/*CONTACT*/
import { ContactPage } from '../pages/contact/contact/contact';
import { AddNewWalletPage } from '../pages/contact/add-new-wallet/add-new-wallet';
/*END CONTACT*/

/*SINGUP*/
import { SignupStepOnePage } from '../pages/signup/signup-step-one/signup-step-one';
import { SignupStepTowPage } from '../pages/signup/signup-step-tow/signup-step-tow';
/*END SINGUP*/

import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage; 

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
