import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.scss']
})
export class StarshipsListComponent implements OnInit {

  @Input() starShipList: any;

  constructor() { }

  ngOnInit(): void {
  }

  fetchNextPage(){
    
  }

}
