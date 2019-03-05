import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';


import { CardComponent } from './card/card.component';
import { HostProfileComponent } from './host-profile/host-profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';

import { HomeStayRoutingModule } from './home-stay-routing.module';

@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    CardComponent,
    HostProfileComponent
  ],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBqABHis9t24f47ASZK_gQafzzKZXJ3294'
    }),
    HomeStayRoutingModule
  ],
})
export class HomeStayModule { }
