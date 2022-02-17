import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

import { HomeComponent } from './home.component';
import { TabsComponent } from './components/tabs/tabs.component';


@NgModule({
  declarations: [
    HomeComponent,
    TabsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NzTabsModule
  ]
})
export class HomeModule { }
