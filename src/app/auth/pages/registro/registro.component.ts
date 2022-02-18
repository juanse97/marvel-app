import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignInModel } from '../models/signIn.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  data: SignInModel = new SignInModel();
  usersSignIn: SignInModel[] = [];
  user: any;
  userValid: SignInModel[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  signIn() {
    // Obtener información LS
    this.user = localStorage.getItem("signIn")
    // Formato JSON
    this.user = JSON.parse(this.user)
    //Validación campos vacios
    if ((Object.keys(this.data).length == 0)) {
      alert('Llenar Campos')
    } else {
      //envio de data a LS
      this.usersSignIn.push(this.data)
      localStorage.setItem('signIn', JSON.stringify(this.usersSignIn));
      //Redirección
      this.router.navigate(['/heroes'])
    }
  }
}
