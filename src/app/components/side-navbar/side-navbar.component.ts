import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users-service/users.service';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent implements OnInit {

   constructor(public userService:UsersService) { 
   }

  ngOnInit(): void {
  }

}
