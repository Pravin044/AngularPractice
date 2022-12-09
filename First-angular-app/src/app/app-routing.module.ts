import { NgModule } from '@angular/core'
import { Router, Routes, RouterModule } from '@angular/router'
import { AuthenticateGuard } from "./route-guard/authenticate.guard";
import { SystemPanelComponent } from "./system/system-panel/system-panel.component";
import { AreaPanelComponent } from "./area/area-panel/area-panel.component";
import { DevicePanelComponent } from "./device/device-panel/device-panel.component";
import { AccountsComponent } from "./accounts/accounts/accounts.component";
import { LoginComponent } from "./accounts/login/login.component";
import { SignUpComponent } from "./accounts/signup/signup.component";
import { SingupRouteGuard } from "./route-guard/singup-route.guard";
import { AddAreaComponent } from "./area/add-area/add-area.component";
import { AddDeviceComponent } from "./device/add-device/add-device.component";
import { AddSystemComponent } from "./system/add-system/add-system.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { SystemRoutingModule } from './system/system-routing.module';

//route configuration
const routeConfig: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "accounts"
    },
    {
        path: "accounts", component: AccountsComponent,
        children: [
            {
                path: "login",
                component: LoginComponent
            },
            {
                path: "signup",
                component: SignUpComponent,
                canDeactivate: [SingupRouteGuard]
            }
        ]
    },
    {
        path: "dashboard",
        component: DashboardComponent,
        canActivate: [AuthenticateGuard],
        children: [
            {
                path: "system",loadChildren:()=>import('./system/system.module').then(m=>m.SystemModule)
            },
            {
                path: "area", loadChildren:()=>import('./area/area.module').then(m=>m.AreaModule)
            },
            {
                path: "device", loadChildren:()=>import('./device/device.module').then(m=>m.DeviceModule)
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routeConfig)],
    exports:[RouterModule]
})
export class AppRouterModule {

}