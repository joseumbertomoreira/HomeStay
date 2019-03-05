import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { HttpClient } from '@angular/common/http';

import { Host } from './host';
import { HOSTS } from './host-list';
import { HomestayhttpService } from '../homestayhttp.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;

  hosts: Object[] = [];

  constructor(homestayservice: HomestayhttpService) { 
    
    homestayservice
      .hostList()
        .subscribe((hostList) => {
          this.hosts = hostList
        });
  }

  ngOnInit() {
  }

}
