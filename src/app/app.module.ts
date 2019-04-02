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
import { AidogHomePage } from '../pages/aidog/aidog-home/aidog-home';
import { AidogAddPage } from '../pages/aidog/aidog-add/aidog-add';
import { AidogRewardPage } from '../pages/aidog/aidog-reward/aidog-reward';
import { AidogRecordPage } from '../pages/aidog/aidog-record/aidog-record';
import { AidogRewardRecordPage } from '../pages/aidog/aidog-reward-record/aidog-reward-record';

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
import { RegisterPage } from '../pages/register/register';
/*END SINGUP*/

import { LoginPage } from '../pages/login/login';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';

/*PROFILE*/
import { QrcodePartnerPage } from '../pages/profile/qrcode-partner/qrcode-partner';
import { MyPartnerPage } from '../pages/profile/my-partner/my-partner';
import { RecordsExchangePage } from '../pages/profile/records-exchange/records-exchange';

/*END PROFILE*/

/*eanings*/
import { EaningsPage } from '../pages/eanings/eanings/eanings';
import { ProfitDailyPage } from '../pages/eanings/profit-daily/profit-daily';
import { SystemCommissionPage } from '../pages/eanings/system-commission/system-commission';
import { DirectCommissionPage } from '../pages/eanings/direct-commission/direct-commission';
import { LeaderCommissionPage } from '../pages/eanings/leader-commission/leader-commission';

/*end eanings*/

/*Setting*/
import { SettingsPage } from '../pages/settings/settings/settings';
import { VerifyEmailPage } from '../pages/settings/verify-email/verify-email';
import { ModifyPasswordPage } from '../pages/settings/modify-password/modify-password';
import { AuthenticatorPage } from '../pages/settings/authenticator/authenticator';
import { AuthenticatorLoginPage } from '../pages/settings/authenticator-login/authenticator-login';
import { AboutUsPage } from '../pages/settings/about-us/about-us';

/*end Setting*/

/*Contact us*/
import { ContactUsPage } from '../pages/contact-us/contact-us/contact-us';
import { AddNewContactusPage } from '../pages/contact-us/add-new-contactus/add-new-contactus';
import { DetailContactusPage } from '../pages/contact-us/detail-contactus/detail-contactus';

/*end contact us*/

import { ExchangePage } from '../pages/exchange/exchange';
import { DepositPage } from '../pages/deposit/deposit';
import { WithdrawPage } from '../pages/withdraw/withdraw';
import { WalletPage } from '../pages/wallet/wallet';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { ServerProvider } from '../providers/server/server';
import { AccountProvider } from '../providers/server/account';
import { WalletProvider } from '../providers/server/wallet';
import { ExchangeProvider } from '../providers/server/exchange';
import { ContactProvider } from '../providers/server/contact';
import { AidogProvider } from '../providers/server/aidog';


import { Clipboard } from '@ionic-native/clipboard';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Screenshot } from '@ionic-native/screenshot';
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
    RegisterPage,
    LoginPage,
    ForgotPasswordPage,
    AidogHomePage,
    AidogRewardRecordPage,
    QrcodePartnerPage,
    MyPartnerPage,
    EaningsPage,
    SettingsPage,
    RecordsExchangePage,
    ProfitDailyPage,
    SystemCommissionPage,
    DirectCommissionPage,
    LeaderCommissionPage,
    ContactUsPage,
    AddNewContactusPage,
    DetailContactusPage,
    VerifyEmailPage,
    ModifyPasswordPage,
    AuthenticatorPage,
    AuthenticatorLoginPage,
    AboutUsPage
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
    RegisterPage,
    LoginPage,
    ForgotPasswordPage,
    AidogHomePage,
    AidogRewardRecordPage,
    QrcodePartnerPage,
    MyPartnerPage,
    EaningsPage,
    SettingsPage,
    RecordsExchangePage,
    ProfitDailyPage,
    SystemCommissionPage,
    DirectCommissionPage,
    LeaderCommissionPage,
    ContactUsPage,
    AddNewContactusPage,
    DetailContactusPage,
    VerifyEmailPage,
    ModifyPasswordPage,
    AuthenticatorPage,
    AuthenticatorLoginPage,
    AboutUsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServerProvider,
    AccountProvider,
    WalletProvider,
    ExchangeProvider,
    ContactProvider,
    AidogProvider,
    Clipboard,
    BarcodeScanner,
    Screenshot
  ]
})
export class AppModule {}
