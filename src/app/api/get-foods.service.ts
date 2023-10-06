import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class getFoodsService {
    baseURL = 'https://www.themealdb.com/api/json/v1/1/'
}