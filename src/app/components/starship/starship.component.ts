import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.scss']
})
export class StarshipComponent implements OnInit {

  @Input() starShip: any;

  imageUrl:string;

  constructor() { }

  ngOnInit(): void {
    this.getStarshipId();
  }

  getStarshipId() {
    var url = this.starShip.url;
    this.starShip.shipId = url.split("/").filter(function (item) {
        return item !== "";
    }).slice(-1)[0];
    this.imageUrl="https://starwars-visualguide.com/assets/img/starships/" + this.starShip.shipId + ".jpg";
  }

}
