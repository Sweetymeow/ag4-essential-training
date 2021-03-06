import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { media } from '../data/media';
import { mediaItems } from '../data/mediaItems';
// import { MediaService } from './media.service';
import 'rxjs/add/operator/map';

@Injectable()
export class MediaItemService {
  constructor(private http: Http) {}
  mediaItems: media[] = mediaItems;

  get() { // get(medium){
    return this.mediaItems;
  }

  add(mediaItem : media) {
    return this.http.post('mediaitems', mediaItem).map(response => {});
  }

  delete(mediaItem : media) {
    let index = this.mediaItems.indexOf(mediaItem);
    if( index >= 0 ){
      this.mediaItems.splice(index, 1);
    }
    //return this.http.delete(`mediaitems/${mediaItem.id}`).map(response => {});
  }

    // get(medium){
    // let searchParams = new URLSearchParams();
    // searchParams.append('medium', medium);
    // return this.http.get('mediaitems', { search: searchParams })
    //   .map(response => {
    //     return response.json().mediaItems;
    //   });
    //}
}
