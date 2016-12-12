import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { DivisionDetailsPage } from '../division-details/division-details';
import { AddressesService } from '../../app/addresses/addresses.service';

@Component({
  selector: 'page-divisions',
  templateUrl: 'divisions.html',
})
export class DivisionsPage {
  divisions: Array<Object> = []; 

  constructor(public navCtrl: NavController, private addressesService: AddressesService) {

  }

  ngOnInit() {
    this.addressesService.getAddresses().subscribe(
      res => this.divisions = res 
    );
  }

  goToDetailPage(division: any) {    
    this.navCtrl.push(DivisionDetailsPage, {
      division: division
    });
  }

}
