import { Component } from '@angular/core';

import { AssetsPage } from '../tab/assets/assets';
import { MarketsPage } from '../tab/markets/markets';
import { TransactionPage } from '../tab/transaction/transaction';
import { ProfilePage } from '../tab/profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = MarketsPage;
  tab2Root = AssetsPage;
  tab3Root = TransactionPage;
  tab4Root = ProfilePage; 

  constructor() {

  }
}
