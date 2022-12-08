import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemPanelComponent } from './system-panel/system-panel.component';
import { AddSystemComponent } from './add-system/add-system.component';
import { ComponentModule } from '../component/component.module';
import {MatSidenavModule} from '@angular/material/sidenav'
import { RouterModule } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list'
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button'


@NgModule({
  declarations: [
  
    SystemPanelComponent,
       AddSystemComponent
  ],
  imports: [
    CommonModule,
    ComponentModule,
    MatSidenavModule,
    RouterModule,
    MatGridListModule,
    MatIconModule,
    MatChipsModule,
    MatButtonModule
  ]
})
export class SystemModule { }
