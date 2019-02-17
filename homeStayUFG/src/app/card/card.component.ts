import { Component, OnInit } from '@angular/core';
import { Host } from './host';
import { HOSTS } from './host-list';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  hosts: Host[] = HOSTS;

  constructor() { }

  ngOnInit() {
  }

}
