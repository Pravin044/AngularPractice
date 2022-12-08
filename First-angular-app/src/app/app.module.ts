import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AccountsModule } from "./accounts/accounts.module";
import { AppRootComponent } from "./approot/approot.component";
import { ComponentModule } from "./component/component.module";
import { ConsoleLoggerService } from "./Services/consoleLogger.service";
import { MatTabsModule } from "@angular/material/tabs"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { MatToolbarModule } from "@angular/material/toolbar"
import { RouterModule, Routes } from "@angular/router";
import { AccountsComponent } from "./accounts/accounts/accounts.component";
import { LoginComponent } from "./accounts/login/login.component";
import { SignUpComponent } from "./accounts/signup/signup.component";
import { SingupRouteGuard } from "./route-guard/singup-route.guard";
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon'
import { AuthenticateGuard } from "./route-guard/authenticate.guard";
import { SystemPanelComponent } from "./system/system-panel/system-panel.component";
import { AreaPanelComponent } from "./area/area-panel/area-panel.component";
import { DevicePanelComponent } from "./device/device-panel/device-panel.component";
import { SystemModule } from "./system/system.module";
import { AddSystemComponent } from "./system/add-system/add-system.component";
import { AreaModule } from "./area/area.module";
import { DeviceModule } from "./device/device.module";
import { AddAreaComponent } from "./area/add-area/add-area.component";
import { AddDeviceComponent } from "./device/add-device/add-device.component";


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
                path: "system", component: SystemPanelComponent,
                children: [{
                    path: "add", component: AddSystemComponent
                }]
            },
            {
                path: "area", component: AreaPanelComponent, children: [{
                    path: "add", component: AddAreaComponent
                }]
            },
            {
                path: "device", component: DevicePanelComponent, children: [{
                    path: "add", component: AddDeviceComponent
                }]
            }
        ]
    }
]



@NgModule({
    declarations: [AppRootComponent, DashboardComponent],
    imports: [BrowserModule,
        ComponentModule,
        AccountsModule,
        MatTabsModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        RouterModule.forRoot(routeConfig),
        MatChipsModule,
        MatIconModule,
        SystemModule,
        AreaModule, DeviceModule],
    bootstrap: [AppRootComponent], //this component will be bootstraped means initially rendered.
    providers: [ConsoleLoggerService/*tightly coupled*/, { provide: "logger", useClass: ConsoleLoggerService }/*loosely coplued*/]
})
export class AppModule {

}