import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { Observable } from "rxjs";

import { CatFact } from "../models/cat-fact.models";



@Injectable({ 
    providedIn: 'root'
 })
 export class CatFactService {
     constructor(private http: HttpClient) {
     }
getCatFacts(): Observable<CatFact[]> {
    const url = 'https://cat-fact.herokuapp.com/facts';
    return this.http.get<CatFact[]>(url);
}
 }