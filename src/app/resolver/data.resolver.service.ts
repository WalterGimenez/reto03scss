import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable, of } from "rxjs";

const departamento = ["Marqueting", "Ventas", "Otros"]

@Injectable({ providedIn: 'root'})
export class DataResolverService implements Resolve<any>{ 
    resolve(): Observable<any>{
        //to do call service
        return of (departamento)
    }
}