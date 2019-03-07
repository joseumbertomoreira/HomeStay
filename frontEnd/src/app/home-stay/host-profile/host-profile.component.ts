import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { HomestayhttpService } from '../homestayhttp.service';

@Component({
  selector: 'app-host-profile',
  templateUrl: './host-profile.component.html',
  styleUrls: ['./host-profile.component.css']
})
export class HostProfileComponent implements OnInit {

  private host: any = {};
  latitude: number;
  longitude: number;
  zoom: number

  constructor(private activatedRoute: ActivatedRoute) {}


  ngOnInit() {
    this.host = this.activatedRoute.snapshot.data.host;
    this.host.address.forEach(element => {
      if(element.label == 'Minha casa'){
        this.latitude = element.lat;
        this.longitude = element.lng;
        this.zoom = element.zoom;
      }
    });
    console.log('host', this.host)
  }

}
