import { Component, Input, Output, EventEmitter } from '@angular/core';
import { media } from './data/media';

@Component({
  selector: 'mw-media-item',
  templateUrl: 'app/media-item.component.html',
  styleUrls: ['app/media-item.component.css']
})

export class MediaItemComponent {
  @Input() mediaItem : media[];
  @Output() delete = new EventEmitter();

  onDelete() {
    this.delete.emit(this.mediaItem);
  }
}
