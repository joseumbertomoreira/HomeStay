import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { MainComponent } from './main/main.component';
import { HostProfileComponent } from './host-profile/host-profile.component';
import { CardComponent } from './card/card.component';
import { HomeStayResolver } from './home-stay.resolver';

const homeStayRoutes: Routes = [
  { path: '', component: MainComponent },
  { 
    path: 'user/host/:name',
    component: HostProfileComponent,
    resolve: {
      host: HomeStayResolver
    }
  },
  { path: 'host-list', component: CardComponent }
];


@NgModule({
  imports: [
    RouterModule.forChild(homeStayRoutes)
  ],
  exports: [RouterModule]
})

export class HomeStayRoutingModule { }
