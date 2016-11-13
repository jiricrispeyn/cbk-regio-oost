import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { ClubDetailsPage } from '../club-details/club-details';

@Component({
  selector: 'page-division-details',
  templateUrl: 'division-details.html',
})
export class DivisionDetailsPage {

  division: any = {};

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    
  }

  ngOnInit() {
    this.division = this.navParams.get('division');
  }

  goToDetailPage(club: any) {
    this.navCtrl.push(ClubDetailsPage, {
      club: club
    });
  }

}
