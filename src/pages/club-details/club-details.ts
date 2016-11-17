import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { AddressesService } from '../../app/addresses/addresses.service';

import * as L from 'mapbox.js';

@Component({
  selector: 'page-club-details',
  templateUrl: 'club-details.html',
})
export class ClubDetailsPage {

  club: any = {};
  size: any = {
    width: 0,
    height: 0
  };

  constructor(public navCtrl: NavController, private navParams: NavParams, private addressesService: AddressesService) {
    
  }

  ngOnInit() {
    this.club = this.navParams.get('club');
  }

  ngAfterViewInit() {
    this.addressesService.geocodeAddress(this.club.address).map(
      res => res.features[0].geometry.coordinates.reverse()
    ).subscribe(
      res => {
        this.size.width = `100%`;
        this.size.height = `${window.screen.width / 16 * 9}px`;

        L.mapbox.accessToken = this.addressesService.ACCESS_TOKEN;
        
        let map = L.mapbox.map('map', 'mapbox.streets', {
          center: res,
          zoom: 13
        });

        map.invalidateSize();
      }
    );
  }

}
