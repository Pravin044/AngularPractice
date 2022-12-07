import { Component, Input } from "@angular/core";
import { ConsoleLoggerService } from "src/app/Services/consoleLogger.service";
@Component({
    selector: "heading", //element selector
    templateUrl: './heading.component.html',
    styleUrls: ['heading.component.css']
})
export class HeadingComponent {
    @Input()
    content: string = "Heading Component";
    loggerRef:ConsoleLoggerService;
    constructor(loggerRef:ConsoleLoggerService){
        this.loggerRef=loggerRef;
        this.loggerRef.write(this.content);
    }
}