import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { HostProfileComponent } from './host-profile/host-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HostProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
