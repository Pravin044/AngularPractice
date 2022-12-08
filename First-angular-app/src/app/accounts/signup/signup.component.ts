import { Component } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
@Component({
    selector: 'signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignUpComponent {

    signUpModel: FormGroup;
    constructor(private routerService: Router) {
        this.signUpModel = new FormGroup({
            name: new FormControl("", Validators.required),
            password: new FormControl("", Validators.required),
            mail: new FormControl("", Validators.required)
        });


    }

    signUp() {
        console.log("sing u lciked");

        if (this.signUpModel.valid) {
            console.log("valid");
            this.routerService.navigate(["/accounts"])
        }
        else
            console.log("form invalid");


    }

    reset() {
        this.signUpModel.reset();
    }

}