import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  constructor(public http:HttpClient) {}

  getStarships(url) {

    return new Promise((resolve, reject) => {
      if (!url) {
          url  ='https://swapi.dev/api/starships/'
      } else {
          url = url.replace('http', 'https');
      }
      return this.http.get(url,{ headers: { 'Authorization': 'none'  }}).subscribe( (res:any) => 
        { 
          resolve(res);
        },
          msg => {
          reject(msg);
        }
      )
    })
  }


  getStarship(id){
    return new Promise((resolve, reject) => {
      let url  = 'https://swapi.dev/api/starships/' + id + '/';
      return this.http.get(url,{ headers: { 'Authorization': 'none'  }}).subscribe( (res:any) => 
        { 
          resolve(res);
        },
          msg => {
          reject(msg);
        }
      )
    })
  }

   
}
