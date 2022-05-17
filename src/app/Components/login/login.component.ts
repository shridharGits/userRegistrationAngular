import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  constructor() { }

  ngOnInit(): void {
  }
  
  savedUser: User;
  data: {name: string, email: string, password: string}[] = [
    
  ];
  loginUser(){
    var userEmail = this.email;
    var userPassword = this.password;

  //  this.data.push(JSON.parse(localStorage.getItem('user') as string))
   this.savedUser = JSON.parse(localStorage.getItem('user') as string)
    if(this.savedUser.email === userEmail && this.savedUser.password === userPassword){
        window.location.href = '/userinfo'
    }
    
  }

}
