import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnInit{

  @Input('color') color: string = '';
  @Input('size') size: string = '';
  @Input('fontStyle') fontStyle: string = '';

  constructor(public element: ElementRef) { 
    
  }

  ngOnInit(): void {
    console.log(this.color);
    this.element.nativeElement.style.color = this.color;
    this.element.nativeElement.style.fontSize = this.size;
    this.element.nativeElement.style.fontStyle = this.fontStyle;
  }

}
