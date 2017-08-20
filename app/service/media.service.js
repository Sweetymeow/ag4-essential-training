System.register(["@angular/core", "../data/mediaItems"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, mediaItems_1, MediaService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mediaItems_1_1) {
                mediaItems_1 = mediaItems_1_1;
            }
        ],
        execute: function () {
            MediaService = class MediaService {
                getMediaItems() {
                    return Promise.resolve(mediaItems_1.mediaItems);
                }
            };
            MediaService = __decorate([
                core_1.Injectable()
            ], MediaService);
            exports_1("MediaService", MediaService);
        }
    };
});
//# sourceMappingURL=media.service.js.map