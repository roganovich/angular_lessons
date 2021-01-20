import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() objStyle: {color?: string}

  constructor(private el: ElementRef, private r: Renderer2) {
  }

  @HostListener('click', ['$event.target']) onClick(event: Event){
    console.log('onClick')
  }

  @HostListener('mouseenter') onEnter(){
    this.r.setStyle(this.el.nativeElement, 'color', this.objStyle.color)
    console.log('onEnter')
  }

  @HostListener('mouseleave') onLeave(){
    this.r.setStyle(this.el.nativeElement, 'color', 'black')
    console.log('onLeave')
  }
}
