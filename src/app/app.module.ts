import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DivisionsPage } from '../pages/divisions/divisions';
import { DivisionDetailsPage } from '../pages/division-details/division-details';
import { ClubDetailsPage } from '../pages/club-details/club-details';
import { AddressesService } from './addresses/addresses.service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DivisionsPage,
    DivisionDetailsPage,
    ClubDetailsPage
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
    ClubDetailsPage
  ],
  providers: [
    AddressesService
  ]
})
export class AppModule {}
