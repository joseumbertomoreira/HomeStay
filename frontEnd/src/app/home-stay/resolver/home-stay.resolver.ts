import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { HomestayhttpService } from '../services/homestayhttp.service'

@Injectable({ providedIn: 'root'})

export class HomeStayResolver implements Resolve<Observable<Object>>{
    service: any;
    constructor(private homeStayService: HomestayhttpService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let id = route.params.name;
        return this.homeStayService.host(id);
    }

}