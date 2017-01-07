import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DivisionsPage } from '../pages/divisions/divisions';
import { DivisionDetailsPage } from '../pages/division-details/division-details';
import { AddressesService } from './addresses/addresses.service';
import { LeaguesPage } from '../pages/leagues/leagues';
import { LeagueDetailsPage } from '../pages/league-details/league-details';
import { LeaguesService } from './leagues/leagues.service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DivisionsPage,
    DivisionDetailsPage,
    LeaguesPage,
    LeagueDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DivisionsPage,
    DivisionDetailsPage,
    LeaguesPage,
    LeagueDetailsPage
  ],
  providers: [
    AddressesService,
    LeaguesService
  ]
})
export class AppModule {}
