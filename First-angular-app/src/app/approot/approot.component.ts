import { Component } from "@angular/core";

@Component({
    selector: 'approot',
    templateUrl: './approot.component.html',
    styleUrls:['./approot.component.css']

})
export class AppRootComponent {
    heading: string = "Siemens Angular training";
    footer:string="Copyright @ Siemens "
}