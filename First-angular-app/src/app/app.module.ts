import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AccountsModule } from "./accounts/accounts.module";
import { AppRootComponent } from "./approot/approot.component";
import { ComponentModule } from "./component/component.module";
import { ConsoleLoggerService } from "./Services/consoleLogger.service";
import { MatTabsModule } from "@angular/material/tabs"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { MatToolbarModule } from "@angular/material/toolbar"
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon'
import { SystemModule } from "./system/system.module";
import { AreaModule } from "./area/area.module";
import { DeviceModule } from "./device/device.module";
import { AppRouterModule } from "./app-routing.module";

@NgModule({
    declarations: [AppRootComponent, DashboardComponent],
    imports: [BrowserModule,
        ComponentModule,
        AccountsModule,
        MatTabsModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatChipsModule,
        MatIconModule, AppRouterModule],
    bootstrap: [AppRootComponent], //this component will be bootstraped means initially rendered.
    providers: [ConsoleLoggerService/*tightly coupled*/,
        { provide: "logger", useClass: ConsoleLoggerService },/*loosely coplued*/
        { provide: "BaseUrl", useValue: "http://localhost:3200" }
    ]
})
export class AppModule {

}