import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  API_URI = 'http://localhost:4000/api'

  constructor(private http: HttpClient) { }

  getGames(){
    return this.http.get('')
  }
}
