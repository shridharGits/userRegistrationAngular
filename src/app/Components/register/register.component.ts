import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: string;
  email: string;
  password: string;

  constructor() { }

  ngOnInit(): void {
  }

  
  user: User;
  addUser(){
    this.user = {
      name: this.name,
      email: this.email,
      password: this.password
    }
    localStorage.setItem('user', JSON.stringify(this.user));
    window.location.href = '/login'
  }

}
