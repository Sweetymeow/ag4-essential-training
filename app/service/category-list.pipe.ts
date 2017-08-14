import { Pipe } from '@angular/core';//import { Pipe, PipeTransform } from '@angular/core';
import { media } from '../data/media';

@Pipe({ name: 'categoryList'})
export class CategoryListPipe {
  // get all the distinct category names across all media items passed in.
  transform(mediaItems : media[]){
    var categories = [];
    for(var i in mediaItems){
      {
        if(categories.indexOf(mediaItems[i].category) <= -1){
    // 如果item.category 不在 categories数组当中，则将该category存入数组
          categories.push(mediaItems[i].category);
        }
      }
    };
    return categories.join(', '); // Pipe 返回的数据
  }
}
