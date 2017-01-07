import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { DivisionsPage } from '../divisions/divisions';
import { LeaguesPage } from '../leagues/leagues';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = DivisionsPage;
  tab3Root: any = LeaguesPage;

  constructor() {

  }
}
