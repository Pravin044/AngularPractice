import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, Router, RouterModule } from '@angular/router';
import { AddSystemComponent } from './add-system/add-system.component';
import { SystemPanelComponent } from './system-panel/system-panel.component';


const systemRouteConfig: Routes = [
  {
    path: "", component: SystemPanelComponent, children: [
      {
        path: "add", component: AddSystemComponent
      }
    ]
  }


]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(systemRouteConfig)
  ],
  exports:[RouterModule]

})
export class SystemRoutingModule { }
