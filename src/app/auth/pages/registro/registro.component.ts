import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { SignInModel } from '../../models/signIn.model';

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

  constructor(private router: Router, private _modal: NzModalService) { }

  ngOnInit(): void {
  }

  signIn(form: NgForm) {
    //Validar campos
    if (!form.valid) return
    // Obtener información LS
    this.user = localStorage.getItem("signIn")
    // Formato JSON
    this.user = JSON.parse(this.user)
    this.userValid = this.user;
    if (this.userValid.find(users => users.email === this.data.email)) {
      this.createModalError(); return
    }
    //envio de data a LS
    this.usersSignIn.push(this.data)
    localStorage.setItem('signIn', JSON.stringify(this.usersSignIn));
    //Redirección
    this.router.navigate(['/heroes'])
  }

  // Modals
  createModalError(): void {
    this._modal.error({
      nzTitle: 'Error',
      nzContent: 'El correo ya se encuentra registrado',
      nzClosable: false,
      nzOkText: 'Ok',
      nzOnOk: () => this._modal.closeAll()
    });
  }
}
