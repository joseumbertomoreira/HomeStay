import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HomestayhttpService } from '../homestayhttp.service';

@Component({
  selector: 'app-host-profile',
  templateUrl: './host-profile.component.html',
  styleUrls: ['./host-profile.component.css']
})
export class HostProfileComponent implements OnInit {

  private host: Object = {};

  constructor(private homestayservice: HomestayhttpService, private activatedRoute: ActivatedRoute) {
    const name = this.activatedRoute.snapshot.params.name;
    this.homestayservice.
      host(name).subscribe((hostFromServer) => {
        this.host = hostFromServer
      });
    console.log(name); 
   }


  ngOnInit() {
  }

}
