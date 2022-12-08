import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevicePanelComponent } from './device-panel/device-panel.component';
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button' 
import { RouterModule } from '@angular/router';
import { ComponentModule } from '../component/component.module';
import { AddDeviceComponent } from './add-device/add-device.component';


@NgModule({
  declarations: [
    DevicePanelComponent,
    AddDeviceComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    ComponentModule
  ]
})
export class DeviceModule { }
