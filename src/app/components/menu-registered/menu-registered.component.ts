import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'menu-registered',
  templateUrl: './menu-registered.component.html',
  styleUrls: ['./menu-registered.component.scss']
})
export class MenuRegisteredComponent implements OnInit {

  constructor(public authService:AuthenticationService) { }

  ngOnInit(): void {
  }

}
