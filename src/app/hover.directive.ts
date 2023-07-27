import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[pracHover]',
})
export class HoverDirective implements OnInit {
  @Input() color: string = '';

  constructor(private element: ElementRef) {
    console.log(element.nativeElement);
  }

  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = 'pink';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = 'white';
  }
}
