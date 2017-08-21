import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { media } from '../data/media';
import { mediaItems } from '../data/mediaItems';
// import { MediaService } from './media.service';
import 'rxjs/add/operator/map';

@Injectable()
export class MediaItemService {
  mediaItems: media[] = mediaItems;

  get() {
    return this.mediaItems;
  }

  add(mediaItem : media) {
    this.mediaItems.push(mediaItem);
  }

  delete(mediaItem: media) {
    let index = this.mediaItems.indexOf(mediaItem);
    if( index >= 0 ){
      this.mediaItems.splice(index, 1);
    }
    // return this.http.delete(`mediaitems/${mediaItem.id}`).map(response => {});
  }

  // getMediaItemData() :void{
  //   this.mediaService.getMediaItems()
  //     .then(items => this.mediaItems = items);
  // }
}
