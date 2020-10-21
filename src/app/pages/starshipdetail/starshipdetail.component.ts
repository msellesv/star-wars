import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShipsService } from '../../services/ships.service';

@Component({
  selector: 'app-starshipdetail',
  templateUrl: './starshipdetail.component.html',
  styleUrls: ['./starshipdetail.component.scss']
})
export class StarshipdetailComponent implements OnInit {

  starshipFeatures;
  imageUrl:string;

  constructor(private route:ActivatedRoute, private router:Router, public ShipsService:ShipsService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.getStarShipData(id);
  }

  getStarShipData(id){
    this.ShipsService.getStarship(id).then((data:any) => {
      this.starshipFeatures = Object.entries(data);
      this.imageUrl="https://starwars-visualguide.com/assets/img/starships/" + id + ".jpg";
    }).catch(error=>{
      console.log(error)
    })
  }

}
