import { Directive, Input, ElementRef, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[dynamicColor]'
})
export class DynamicColorDirective implements OnInit{

  @Input('dynamicColor') color: string = '';

  @HostListener('mouseenter') hover(){
    console.log('Hover event')
    this.element.nativeElement.style.color = this.color;
  }
  
  @HostListener('mouseleave') out(){
    console.log('mouse leave event')
    this.element.nativeElement.style.color = this.originalColor;
  }

  @HostListener('click') click(){
    console.log('click')
    // this.element.nativeElement.style.background = 'yellow';
    this.element.nativeElement.style.fontSize = '120px';
  }

  originalColor = '';

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    console.log(this.color)
    console.log(this.element.nativeElement)
    this.originalColor = this.element.nativeElement.style.color;
  }

}
