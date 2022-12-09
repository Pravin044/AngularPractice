import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router,RouterModule,Routes } from '@angular/router'; 
import { AreaPanelComponent } from './area-panel/area-panel.component';
import { AddAreaComponent } from './add-area/add-area.component';
const areaRouterConfig:Routes=[
  {
    path:"",component:AreaPanelComponent,
    children:[
      {
        path:"add",
        component:AddAreaComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(areaRouterConfig)
  ],
  exports:[RouterModule]
})
export class AreaRoutingModule { }
