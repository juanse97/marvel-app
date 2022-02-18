import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpModel } from '../models/signUp.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data: SignUpModel = new SignUpModel();
  registeredUsers: any;
  user: SignUpModel[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  signUp() {
    this.registeredUsers = localStorage.getItem("signIn")
    this.registeredUsers = JSON.parse(this.registeredUsers)
    this.user = this.registeredUsers;
    if ((this.user.find(user => user.email === this.data.email)) && ((this.user.find(user => user.password === this.data.password)))) {
      this.router.navigate(['/heroes'])
    } else {
      console.log('NO')
    }

  }

}
