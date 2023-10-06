import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Product } from "../types/models";

@Injectable({
    providedIn:'root'
})

export class getProductsService {
    baseURL = 'https://fakestoreapi.com/products'
    constructor( private http: HttpClient) {}

    getAllProducts():Observable<any> {
        return this.http.get(this.baseURL).pipe();
    }
}