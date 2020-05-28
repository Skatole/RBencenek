import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRedColor]'
})
export class RedColorDirective {

  @HostBinding('style.color') public fontcolor = 'black';
  @HostListener('mouseenter') public mouseEnt() {
    this.fontcolor = 'red';
  }
  @HostListener('mouseleave') public mouseL() {
    this.fontcolor = 'black';
  }

  constructor() { }

}
