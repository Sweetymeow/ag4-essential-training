import { Injectable } from '@angular/core';

import { media } from '../data/media';
import { mediaItems } from '../data/mediaItems';

@Injectable()
export class MediaService {
  getMediaItems(): Promise<media[]> {
    return Promise.resolve(mediaItems);
  }
}
