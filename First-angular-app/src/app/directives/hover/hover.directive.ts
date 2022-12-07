import { Directive, ElementRef, Inject, Renderer2 ,Input, AfterViewInit, OnChanges, SimpleChanges, OnInit,HostListener} from '@angular/core';
import { ILogger } from 'src/app/Services/loggerServiceContract';

@Directive({
  selector: '[hover]'
})
export class HoverDirective implements OnInit {

  @Input()
  hover:string="red";

  @Input()
  alternateColor:string="black";

  constructor(private elementRef: ElementRef, @Inject("logger") private logger: ILogger,private domApi:Renderer2) {
    logger.write(`${elementRef}`);
    console.log(elementRef);
  }

  ngOnInit(): void {
     this.domApi.setStyle(this.elementRef.nativeElement,"color",this.hover);
  }

  @HostListener("mouseover")
  mouseover(){
    this.domApi.setStyle(this.elementRef.nativeElement,"color",this.alternateColor);
  }

  @HostListener("mouseleave")
  mouseleave(){
    this.domApi.setStyle(this.elementRef.nativeElement,"color",this.hover);
  }

}
