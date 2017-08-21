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
const media_service_1 = require("./service/media.service");
const media_item_service_1 = require("./service/media-item.service");
let MediaItemListComponent = class MediaItemListComponent {
    // constructor(private mediaService : MediaService){}
    constructor(mediaItemService) {
        this.mediaItemService = mediaItemService;
        this.medium = '';
        this.mediaItems = [];
    }
    // getMedidaData(): void {
    //   this.mediaService.getMediaItems().then(mediaItems => this.mediaItems = mediaItems);
    // }
    ngOnInit() {
        // this.getMedidaData();
        this.mediaItems = this.mediaItemService.get();
    }
    onMediaItemDelete(mediaItem) {
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
};
MediaItemListComponent = __decorate([
    core_1.Component({
        selector: 'mw-media-item-list',
        templateUrl: 'app/media-item-list.component.html',
        styleUrls: ['app/media-item-list.component.css'],
        providers: [media_service_1.MediaService]
    }),
    __metadata("design:paramtypes", [media_item_service_1.MediaItemService])
], MediaItemListComponent);
exports.MediaItemListComponent = MediaItemListComponent;
//# sourceMappingURL=media-item-list.component.js.map