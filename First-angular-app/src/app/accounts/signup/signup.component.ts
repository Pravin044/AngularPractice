import { Component } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AccountService } from '../services/account.services';
@Component({
    selector: 'signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignUpComponent {

    signUpModel: FormGroup;
    constructor(private routerService: Router, private accountServiceref: AccountService) {
        this.signUpModel = new FormGroup({
            name: new FormControl("", Validators.required),
            password: new FormControl("", Validators.required),
            mail: new FormControl("", Validators.required)
        });


    }

    signUp() {
        console.log("sing u lciked");

        if (this.signUpModel.valid) {
            this.accountServiceref.AddNewUser({ name: this.signUpModel.controls['name'].value, password: this.signUpModel.controls['password'].value, email: this.signUpModel.controls['mail'].value }).subscribe((result) => {
                console.log(result);
                this.routerService.navigate(["/accounts"])

            },
                (error) => {
                    console.log(error);
                })
        }
        else
            console.log("form invalid");


    }

    reset() {
        this.signUpModel.reset();
    }

}