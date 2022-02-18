import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { SignUpModel } from '../../models/signUp.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data: SignUpModel = new SignUpModel();
  registeredUsers: any;
  user: SignUpModel[] = [];

  message: string = "";

  constructor(private router: Router, private _modal: NzModalService) { }

  ngOnInit(): void {
  }

  signUp(form: NgForm) {
    //Validar campos
    if (!form.valid) return
    // Obtener información LS
    this.registeredUsers = localStorage.getItem("signIn")
    //  Valadar si existen usuarios
    if (this.registeredUsers != null) {
      // Formato JSON
      this.registeredUsers = JSON.parse(this.registeredUsers)
      this.user = this.registeredUsers;
      // Validación Inicio de sesión
      if ((this.user.find(user => user.email === this.data.email)) && ((this.user.find(user => user.password === this.data.password)))) {
        this.router.navigate(['/heroes'])
      } else {
        this.message = "credenciales incorrectas"
        this.createModalError(this.message)
      }
    } else {
      this.message = "Usuario no registrado"
      this.createModalError(this.message)
    }
  }

  // Modals
  createModalError(message: string): void {
    this._modal.error({
      nzTitle: 'Error',
      nzContent: message,
      nzClosable: false,
      nzOkText: 'Ok',
      nzOnOk: () => this._modal.closeAll()
    });
  }
}
