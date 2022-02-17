import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { SearchOutline } from '@ant-design/icons-angular/icons';
import { PlusCircleFill } from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';
const icons: IconDefinition[] = [SearchOutline, PlusCircleFill];


import { ImagesPipe } from './pipes/images.pipe';

import { HomeComponent } from './home.component';
import { TabsComponent } from './components/tabs/tabs.component';


@NgModule({
  declarations: [
    HomeComponent,
    TabsComponent,
    ImagesPipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    NzTabsModule,
    NzInputModule,
    NzButtonModule,
    NzModalModule,
    NzIconModule,
    NzIconModule.forChild(icons),
  ]
})
export class HomeModule { }
