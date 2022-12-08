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


//route configuration
const routeConfig: Routes = [
    {
        path: "",
        pathMatch:"full",
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
                canDeactivate:[SingupRouteGuard]
            }
        ]
    }
]



@NgModule({
    declarations: [AppRootComponent],
    imports: [BrowserModule,
        ComponentModule,
        AccountsModule,
        MatTabsModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        RouterModule.forRoot(routeConfig)],
    bootstrap: [AppRootComponent], //this component will be bootstraped means initially rendered.
    providers: [ConsoleLoggerService/*tightly coupled*/, { provide: "logger", useClass: ConsoleLoggerService }/*loosely coplued*/]
})
export class AppModule {

}