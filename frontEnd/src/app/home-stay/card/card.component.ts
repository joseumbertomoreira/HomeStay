import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { HttpClient } from '@angular/common/http';

import { Host } from './host';
import { HOSTS } from './host-list';
import { HomestayhttpService } from '../homestayhttp.service';
import { element } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;
  zoom: number;

  hosts: Object[] = [];

  constructor(homestayservice: HomestayhttpService) { 
    
    homestayservice
      .hostList()
        .subscribe((hostList) => {
          this.hosts = hostList
          this.hosts.forEach(element=>{
            console.log(this.hosts)
            for(let i = 0; i < element.address.length; i++){
              if(element.address[i].label == 'Minha casa'){
                this.lat = element.address[i].lat;
                this.lng = element.address[i].lng;
                this.zoom = element.address[i].zoom;
              }
            }
          })
        });
  }

  ngOnInit() {
  }

}
