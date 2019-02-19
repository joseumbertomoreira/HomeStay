import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { CardComponent } from "./card/card.component";
import { HostProfileComponent } from "./host-profile/host-profile.component";

const routes: Routes = [
    { path: '', component: CardComponent },
    { path: 'user/flavio', component: HostProfileComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ] 
})
export class AppRoutingModule { }