import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[mwFavorite]'
})

export class FavoriteDirective {
  @HostBinding('class.is-favorite') isFavorite = true; // Default Value
  @HostBinding('class.is-favorite-hovering') hovering = false; // Default Value
  @HostListener('mouseenter') onMouseEnter(){
    this.hovering = true;
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.hovering = false;
  }

  @Input() set mwFavorite(value: boolean) {
    this.isFavorite = value; // value receive from setter method
  }
}
