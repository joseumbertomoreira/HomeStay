import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

const appRoutes: Routes = [
    {   
        path: '',
        loadChildren: './home-stay/home-stay.module#HomeStayModule' 
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ] 
})

export class AppRoutingModule { }