import { Component } from '@angular/core';

import { AssetsPage } from '../tab/assets/assets';
import { MarketsPage } from '../tab/markets/markets';

import { ProfilePage } from '../tab/profile/profile';
import { PaymentPage } from '../payment/payment/payment';
import { AidogHomePage } from '../aidog/aidog-home/aidog-home';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = ProfilePage;
  tab2Root = MarketsPage;
  tab3Root = AidogHomePage;
  tab4Root = PaymentPage;
  tab5Root = AssetsPage; 

  constructor() {

  }
}
