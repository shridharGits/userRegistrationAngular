import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/User';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  user: User;
  constructor() {
    this.user = JSON.parse(localStorage.getItem('user') as string)
   }

  ngOnInit(): void {
  }

}
