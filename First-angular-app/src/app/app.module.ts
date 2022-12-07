import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AccountsModule } from "./accounts/accounts.module";
import { AppRootComponent } from "./approot/approot.component";
import { ComponentModule } from "./component/component.module";
import { ConsoleLoggerService } from "./Services/consoleLogger.service";

@NgModule({
    declarations:[AppRootComponent],
    imports:[BrowserModule,ComponentModule,AccountsModule],
    bootstrap:[AppRootComponent], //this component will be bootstraped means initially rendered.
    providers:[ConsoleLoggerService/*tightly coupled*/,{provide:"logger",useClass:ConsoleLoggerService}/*loosely coplued*/]
})
export class AppModule{

}