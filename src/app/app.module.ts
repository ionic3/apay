import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { TabsPage } from '../pages/tabs/tabs';

import { AssetsPage } from '../pages/tab/assets/assets';
import { MarketsPage } from '../pages/tab/markets/markets';
import { TransactionPage } from '../pages/tab/transaction/transaction';
import { ProfilePage } from '../pages/tab/profile/profile';

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

/*CONTACT*/
import { ContactPage } from '../pages/contact/contact/contact';
import { AddNewWalletPage } from '../pages/contact/add-new-wallet/add-new-wallet';
/*END CONTACT*/

/*SINGUP*/
import { SignupStepOnePage } from '../pages/signup/signup-step-one/signup-step-one';
import { SignupStepTowPage } from '../pages/signup/signup-step-tow/signup-step-tow';
/*END SINGUP*/

import { LoginPage } from '../pages/login/login';

import { ExchangePage } from '../pages/exchange/exchange';
import { DepositPage } from '../pages/deposit/deposit';
import { WithdrawPage } from '../pages/withdraw/withdraw';
import { WalletPage } from '../pages/wallet/wallet';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { ServerProvider } from '../providers/server/server';
@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    AssetsPage,
    MarketsPage,
    TransactionPage,
    ProfilePage,
    AidogPage,
    AidogAddPage,
    AidogRewardPage,
    AidogRecordPage,
    AidogRecordPage,
    PaymentPage,
    CollectPage,
    TransanctionsPage,
    ExchangePage,
    DepositPage,
    WithdrawPage,
    WalletPage,
    AddNewWalletPage,
    ContactPage,
    SignupStepOnePage,
    SignupStepTowPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    AssetsPage,
    AssetsPage,
    MarketsPage,
    TransactionPage,
    ProfilePage,
    AidogPage,
    AidogAddPage,
    AidogRewardPage,
    AidogRecordPage,
    PaymentPage,
    CollectPage,
    TransanctionsPage,
    ExchangePage,
    DepositPage,
    WithdrawPage,
    WalletPage,
    AddNewWalletPage,
    ContactPage,
    SignupStepOnePage,
    SignupStepTowPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServerProvider
  ]
})
export class AppModule {}
