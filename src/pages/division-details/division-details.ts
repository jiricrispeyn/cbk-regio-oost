import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

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

}
