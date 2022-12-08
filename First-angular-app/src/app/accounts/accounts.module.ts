import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../directives/directives.module';
import { ConsoleLoggerService } from '../Services/consoleLogger.service';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signup/signup.component';
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatGridListModule } from "@angular/material/grid-list";
import { AccountsComponent } from './accounts/accounts.component';
import { ComponentModule } from '../component/component.module';
import {RouterModule, Routes } from '@angular/router'

@NgModule({
    declarations: [LoginComponent, SignUpComponent, AccountsComponent],
    exports: [LoginComponent, SignUpComponent, AccountsComponent],
    imports: [DirectivesModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatGridListModule,
        ComponentModule,RouterModule]

})
export class AccountsModule {

}