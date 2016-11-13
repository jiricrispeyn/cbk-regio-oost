import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-club-details',
  templateUrl: 'club-details.html',
})
export class ClubDetailsPage {

  club: any = {};

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    
  }

  ngOnInit() {
    this.club = this.navParams.get('club');
  }

}
