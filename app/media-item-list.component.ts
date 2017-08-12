import { Component, OnInit } from '@angular/core';

import { media } from './data/media';
import { MediaService } from './service/media.service';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: 'app/media-item-list.component.html',
  styleUrls: ['app/media-item-list.component.css']
})
export class MediaItemListComponent {

    mediaItems : media[];
    myFarItem: media;

  constructor(private mediaService : MediaService){}

  getMedidaData(): void {
    this.mediaService.getMediaItems().then(mediaItems => this.mediaItems = mediaItems);
  }

  ngOnInit(): void {
    this.getMedidaData();
  }

  onMediaItemDelete(mediaItem) {
   }

}
