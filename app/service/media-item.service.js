"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
const mediaItems_1 = require("../data/mediaItems");
// import { MediaService } from './media.service';
require("rxjs/add/operator/map");
let MediaItemService = class MediaItemService {
    constructor(http) {
        this.http = http;
        this.mediaItems = mediaItems_1.mediaItems;
    }
    get() {
        return this.mediaItems;
    }
    add(mediaItem) {
        return this.http.post('mediaitems', mediaItem).map(response => { });
    }
    delete(mediaItem) {
        let index = this.mediaItems.indexOf(mediaItem);
        if (index >= 0) {
            this.mediaItems.splice(index, 1);
        }
        //return this.http.delete(`mediaitems/${mediaItem.id}`).map(response => {});
    }
};
MediaItemService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], MediaItemService);
exports.MediaItemService = MediaItemService;
//# sourceMappingURL=media-item.service.js.map