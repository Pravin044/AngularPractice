import { Component, Input } from '@angular/core'
@Component({
    selector: 'copyright',
    templateUrl: './copyright.component.html',
    styleUrls: ['./copyright.component.css']
})
export class CopyRightComponent {
    @Input()
    footercontent:string="";

}