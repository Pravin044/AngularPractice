import {NgModule} from '@angular/core'
import { DirectivesModule } from '../directives/directives.module';
import { CopyRightComponent } from './copyright/copyright.component';
import { HeadingComponent } from './heading/heading.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CommonModule } from '@angular/common';
import{ReactiveFormsModule,FormsModule} from '@angular/forms';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from '@angular/material/card';
import { MatInputModule} from '@angular/material/input';
import { HeaderComponent } from './header/header.component';
import { NavigationlinksComponent } from './navigationlinks/navigationlinks.component'
@NgModule({
    declarations:[HeadingComponent,CopyRightComponent, FeedbackComponent, HeaderComponent, NavigationlinksComponent],
    exports:[HeadingComponent,CopyRightComponent,FeedbackComponent,HeaderComponent,NavigationlinksComponent],
    imports:[DirectivesModule,CommonModule,ReactiveFormsModule,FormsModule,
        MatToolbarModule,MatIconModule,MatButtonModule,MatCardModule,MatInputModule]
})

export class ComponentModule{

}