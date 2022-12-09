import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  Route,Routes,RouterModule} from "@angular/router";
import { DevicePanelComponent } from './device-panel/device-panel.component';
import { AddDeviceComponent } from './add-device/add-device.component';

const deviceRouterConfig:Routes=[{
  path:"",component:DevicePanelComponent,
  children:[{
    path:"add",component:AddDeviceComponent
  }]
}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(deviceRouterConfig)
  ],
  exports:[RouterModule]
})
export class DeviceRoutingModule { }
