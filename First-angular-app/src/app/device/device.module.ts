import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevicePanelComponent } from './device-panel/device-panel.component';
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button' 
import { RouterModule } from '@angular/router';
import { ComponentModule } from '../component/component.module';
import { AddDeviceComponent } from './add-device/add-device.component';
import { DeviceRoutingModule } from './device-routing.module';
import { DeviceListComponent } from './device-list/device-list.component';


@NgModule({
  declarations: [
    DevicePanelComponent,
    AddDeviceComponent,
    DeviceListComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    ComponentModule,
    DeviceRoutingModule
  ]
})
export class DeviceModule { }
