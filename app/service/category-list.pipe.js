"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core"); //import { Pipe, PipeTransform } from '@angular/core';
let CategoryListPipe = class CategoryListPipe {
    // get all the distinct category names across all media items passed in.
    transform(mediaItems) {
        var categories = [];
        for (var i in mediaItems) {
            {
                if (categories.indexOf(mediaItems[i].category) <= -1) {
                    // 如果item.category 不在 categories数组当中，则将该category存入数组
                    categories.push(mediaItems[i].category);
                }
            }
        }
        ;
        return categories.join(', '); // Pipe 返回的数据
    }
};
CategoryListPipe = __decorate([
    core_1.Pipe({ name: 'categoryList' })
], CategoryListPipe);
exports.CategoryListPipe = CategoryListPipe;
//# sourceMappingURL=category-list.pipe.js.map