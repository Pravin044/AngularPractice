import { Component, ViewChild,Inject } from '@angular/core'
import { ConsoleLoggerService } from 'src/app/Services/consoleLogger.service';
import { ILogger } from 'src/app/Services/loggerServiceContract';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    
    loggerRef:ILogger;
    constructor(@Inject("logger")loggerRef:ILogger){
        this.loggerRef=loggerRef;

    }

    // @ViewChild("txtUsername")
    // userNameTextbox:any;
    username: string = "";
    password: string = "";
    StatusMsg: string = "";
    IsStatusMsg:boolean=false;
    login(): void {
        this.IsStatusMsg=true;
        this.loggerRef.write("Login button clicked")
        if (this.username == "admin" && this.password == "Test123") {
            this.StatusMsg = " valid credentials";

        }
        else {
            this.StatusMsg = " Invalid credentials";
        }
    }
    clear(): void {
        this.IsStatusMsg=false;
        this.loggerRef.write("clear button clicked")
        // this.userNameTextbox.nativeElement.value="";
        this.username = "";
        this.password = "";
        this.StatusMsg = "";
    }
    setUserName(value: string): void {
        this.username = value;

    }
    setPassword(value: string): void {
        this.password = value;

    }

}