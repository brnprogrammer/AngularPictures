import { Injectable } from '../../../../node_modules/@angular/core';
import { Resolve, ActivatedRoute,ActivatedRouteSnapshot, RouterStateSnapshot } from '../../../../node_modules/@angular/router';
import { Observable } from '../../../../node_modules/rxjs';

import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';


@Injectable({providedIn: 'root'})
export class PhotoListResolver implements Resolve<Observable<Photo[]>>{


    constructor(private service: PhotoService){}


        resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
            const userName = route.params.userName;

            return this.service.listFromUserPaginated(userName, 1);




        }

    
} 