import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.scss']
})
export class StarshipComponent implements OnInit {

  @Input() starShip: any;

  imageUrl:string;

  constructor(private router:Router) { }

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

  goToShipDetailPage(){
    this.router.navigate(['/starship/'+this.starShip.shipId]);
  }

}
