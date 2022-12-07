import {NgModule} from '@angular/core'
import { DirectivesModule } from '../directives/directives.module';
import { CopyRightComponent } from './copyright/copyright.component';
import { HeadingComponent } from './heading/heading.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CommonModule } from '@angular/common';
import{ReactiveFormsModule,FormsModule} from '@angular/forms'
import {MatToolbarModule} from "@angular/material/toolbar"
import {MatIconModule} from "@angular/material/icon"

@NgModule({
    declarations:[HeadingComponent,CopyRightComponent, FeedbackComponent],
    exports:[HeadingComponent,CopyRightComponent,FeedbackComponent],
    imports:[DirectivesModule,CommonModule,ReactiveFormsModule,FormsModule,MatToolbarModule,MatIconModule]
})

export class ComponentModule{

}