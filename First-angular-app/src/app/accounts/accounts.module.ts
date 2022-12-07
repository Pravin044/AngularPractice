import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../directives/directives.module';
import { ConsoleLoggerService } from '../Services/consoleLogger.service';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signup/signup.component';

@NgModule({
    declarations:[LoginComponent,SignUpComponent],
    exports:[LoginComponent,SignUpComponent],
    imports:[DirectivesModule,FormsModule,ReactiveFormsModule,CommonModule]
    
})
export class AccountsModule{
 
}