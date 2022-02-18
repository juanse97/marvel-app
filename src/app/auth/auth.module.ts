import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { RouterModule } from '@angular/router';
import { NzModalModule } from 'ng-zorro-antd/modal';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { WarningOutline } from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';
const icons: IconDefinition[] = [WarningOutline];


@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    RouterModule,
    NzModalModule,
    NzIconModule,
    NzIconModule.forChild(icons),
  ]
})
export class AuthModule { }
