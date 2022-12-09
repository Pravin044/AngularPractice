import { Component, ViewChild, Inject } from '@angular/core'
import { ConsoleLoggerService } from 'src/app/Services/consoleLogger.service';
import { ILogger } from 'src/app/Services/loggerServiceContract';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.services';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    loggerRef: ILogger;
    constructor(@Inject("logger") loggerRef: ILogger, private router: Router, private accountServiceRef: AccountService) {
        this.loggerRef = loggerRef;

    }

    // @ViewChild("txtUsername")
    // userNameTextbox:any;
    username: string = "";
    password: string = "";
    StatusMsg: string = "";
    IsStatusMsg: boolean = false;
    login(): void {
        this.IsStatusMsg = true;
        this.loggerRef.write("Login button clicked")
        this.accountServiceRef.validate({ userName: this.username, password: this.password }).subscribe((result) => {
            console.log(result);
            this.router.navigate(["/dashboard"]);

        },
            (error) => {
                console.log(error);

                alert("Please enter correct credentials");

            },
            () => {
                console.log("Service communication is completed");
            }
        )
        // if (this.username == "admin" && this.password == "Test123") {
        //     this.StatusMsg = " valid credentials";
        //     this.router.navigate(["/dashboard"]);
        // }
        // else {
        //     this.StatusMsg = " Invalid credentials";
        // }
    }
    clear(): void {
        this.IsStatusMsg = false;
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