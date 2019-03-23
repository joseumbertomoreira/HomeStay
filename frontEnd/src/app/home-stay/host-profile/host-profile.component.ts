import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { google, LatLngLiteral } from '@agm/core/services/google-maps-types';

@Component({
  selector: 'app-host-profile',
  templateUrl: './host-profile.component.html',
  styleUrls: ['./host-profile.component.css']
})
export class HostProfileComponent implements OnInit {

  private host: any = {};
  latitude: number;
  longitude: number;
  zoom: number;
  minhaCasa: any;
  ufg: any;

  lat1: number = -16.68471;
  lng1: number = -49.267022;
  lat2: number = -16.60201;
  lng2: number = -49.263196;
  public renderOptions: any;
  

  constructor(private activatedRoute: ActivatedRoute) {}

  distance(): void{
    this.minhaCasa = { lat: this.lat1, lng: this.lng1 };
    this.ufg = { lat: this.lat2, lng: this.lng2 };
    this.renderOptions = {
      suppressMarkers: true,
    }
    /*
    this.minhaCasa = new google.maps.LatLng(-16.68471, -49.267022)
    this.ufg = new google.maps.LatLng(-16.60201, -49.263196)
    this.dis =  google.maps.geometry.spherical.computeDistanceBetween(this.minhaCasa, this.ufg);
    */
  }

  ngOnInit() {
    this.host = this.activatedRoute.snapshot.data.host;
    this.host.address.forEach(element => {

      if(element.label == 'Minha casa'){
        this.latitude = element.lat;
        this.longitude = element.lng;
        this.zoom = element.zoom;
        console.log(this.zoom)
        console.log('oi')
        this.distance();
      }
    });
  }

}
