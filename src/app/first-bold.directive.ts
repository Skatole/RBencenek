import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFirstBold]'
})
export class FirstBoldDirective implements OnInit {



  constructor(private el: ElementRef) { }
  ngOnInit(): void {
    this.el.nativeElement.style.fontWeight = 'bold';
  }

}
