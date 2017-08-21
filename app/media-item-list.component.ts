import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { media } from './data/media';
import { MediaService } from './service/media.service';
import { MediaItemService } from './service/media-item.service';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: 'app/media-item-list.component.html',
  styleUrls: ['app/media-item-list.component.css'],
  providers: [ MediaService ]
})

export class MediaItemListComponent {
  medium = '';
  mediaItems : media[] = [];
  paramsSubscription:any;
  myFarItem: media;

  // constructor(private mediaService : MediaService){}
  constructor(private mediaItemService : MediaItemService){}

  // getMedidaData(): void {
  //   this.mediaService.getMediaItems().then(mediaItems => this.mediaItems = mediaItems);
  // }

  ngOnInit(): void {
    // this.getMedidaData();
    this.mediaItems = this.mediaItemService.get();
  }

  onMediaItemDelete(mediaItem : media) {
    this.mediaItemService.delete(mediaItem);
  }

  // constructor(
  //   private mediaItemService: MediaItemService,
  //   private activatedRoute: ActivatedRoute) {}

  // ngOnInit() {
  //   this.paramsSubscription = this.activatedRoute.params
  //     .subscribe(params => {
  //       let medium = params['medium'];
  //       if(medium.toLowerCase() === 'all') {
  //         medium = '';
  //       }
  //       this.getMediaItems(medium);
  //     });
  // }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

  // onMediaItemDelete(mediaItem) {
  //   this.mediaItemService.delete(mediaItem)
  //     .subscribe(() => {
  //       this.getMediaItems(this.medium);
  //     });
  // }

  // getMediaItems(medium) {
  //   this.medium = medium;
  //   this.mediaItemService.get(medium)
  //     .subscribe(mediaItems => {
  //       this.mediaItems = mediaItems;
  //     });
  // }
}
