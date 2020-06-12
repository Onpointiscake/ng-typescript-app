import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Hotel } from '../models/Hotel'

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  API_URI = 'http://localhost:4000/api'

  constructor(private http: HttpClient) { }

  getHotels(){
    return this.http.get(`${this.API_URI}/componentTwo`)
  }

  getHotel(id: string){
    return this.http.get(`${this.API_URI}/componentTwo/${id}`)
  }

  saveHotel(hotel: Hotel){
    return this.http.post(`${this.API_URI}/componentTwo`, hotel)
  }
}
