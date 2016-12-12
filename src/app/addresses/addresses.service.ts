import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AddressesService {

  ACCESS_TOKEN = 'pk.eyJ1Ijoic2VudGlhbmNlbWFwYm94aGVhbHRoIiwiYSI6ImNpbzMyNXNxdTAxMTd2c2tsd2ZocHVscXcifQ.nJlv7HBO-b4-RPTcDyGOLg';
  private COUNTRIES = ['be', 'nl'];

  constructor(private http: Http) {
    
  }

  getAddresses() {
    return this.http.get('http://localhost:8081/addresses')
      .map(res => res.json());
  }

  geocodeAddress(address) {
    let params: URLSearchParams = new URLSearchParams();

    params.set('access_token', this.ACCESS_TOKEN);
    params.set('country', this.COUNTRIES.join());
    params.set('limit', '1');

    return this.http.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json`, {
      search: params
    }).map(res => res.json());
  }
}