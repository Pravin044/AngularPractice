import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaPanelComponent } from './area-panel/area-panel.component';
import {MatIconModule} from '@angular/material/icon'
import { ComponentModule } from '../component/component.module';
import {RouterModule,Route} from '@angular/router'
import { MatButtonModule } from '@angular/material/button';
import { AddAreaComponent } from './add-area/add-area.component';

@NgModule({
  declarations: [
    AreaPanelComponent,
    AddAreaComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    ComponentModule,
    RouterModule,
    MatButtonModule
  ]
})
export class AreaModule { }
