import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  constructor(public http:HttpClient) {}

  GetStarships(url) {

    return new Promise((resolve, reject) => {

      if (!url) {
          url  ='https://swapi.dev/api/starships/'
      } else {
          console.log(url)
          url = url.replace('http', 'https');
      }
      return this.http.get(url,{ headers: { 'Authorization': 'none'  }}).subscribe( (res:any) => 
        { 
          let results = res.results;
          resolve(results);
        },
          msg => {
          reject(msg);
        }
      )
    })
        
  }

   
}
