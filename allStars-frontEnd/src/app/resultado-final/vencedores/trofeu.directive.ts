import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTrofeu]'
})
export class TrofeuDirective implements OnInit {

  @Input() position: number;

  constructor(private el: ElementRef) {

  }

  ngOnInit(): void {
    switch (this.position) {
      case 1:
        this.el.nativeElement.style.color = 'gold'
        break;
      case 2:
        this.el.nativeElement.style.color = 'silver'
        break;
      case 3:
        this.el.nativeElement.style.color = '#cd7f32'
        break;
    }

  }
}
