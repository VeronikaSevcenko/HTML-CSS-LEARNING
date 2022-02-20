import { Injectable } from "@angular/core";
import { LoginQuery } from "../models/login.model";
@Injectable({
    providedIn: 'root'
})
export class LoginService {

    login(query:  LoginQuery): void {
        console.log(query);
         //sūtijam pieprasījumu 
    }
}