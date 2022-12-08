import { Component } from "@angular/core";

@Component({
    selector: 'approot',
    templateUrl: './approot.component.html',
    styleUrls:['./approot.component.css']

})
export class AppRootComponent {
    heading: string = "Siemens Device Managment";
    footer:string="Siemens 2021-22"
}