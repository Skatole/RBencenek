import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appFirstDirective]'
})
export class FirstDirectiveDirective {

  @HostBinding('style.backgroundColor') public backgr = 'white';
  @HostListener('mouseenter') public mouseEnter() {
    this.backgr = 'lightblue';
  }
  @HostListener('mouseleave') public mouseLeave() {
    this.backgr = 'white';
  }
  constructor() { }

}
