import { Component, OnInit } from '@angular/core';
import { SignInModel } from '../models/signIn.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  data: SignInModel = new SignInModel();
  usersSignIn: SignInModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  signIn() {
    if (this.usersSignIn.find(users => users.email === this.data.email)) {
      alert('El correo ya esta registrado')

    } else {
      this.usersSignIn.push(this.data)
      localStorage.setItem('signIn', JSON.stringify(this.usersSignIn));
      console.log(this.data)
    }
  }
}
