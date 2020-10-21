import { Component, OnInit } from '@angular/core';
import { ShipsService } from '../../services/ships.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  error = undefined;
  lastResponse:any;
  starShipList = [];
  endedList: boolean = false;

  constructor(public ShipsService:ShipsService) { }

  ngOnInit(){
    this.error = undefined;
    this.lastResponse = {};
    this.starShipList = [];
    this.fetchNext();
  }

  fetchNext()  {
    if(!this.endedList){
      var url = this.lastResponse ? this.lastResponse.next : null;

      this.ShipsService.getStarships(url).then((data:any) => {

        this.starShipList = this.starShipList.concat(data.results);    
        this.lastResponse = data;
        if(this.lastResponse.next == null){
          this.endedList = true;
        }
      }).catch(function () {
        this.error = true;
      })
    }
  }
}
