System.register(["@angular/core", "@angular/platform-browser", "@angular/forms", "./app.component", "./media-item.component", "./media-item-list.component", "./media-item-form.component", "./favorite.directive", "@ng-bootstrap/ng-bootstrap", "./service/category-list.pipe"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_1, forms_1, app_component_1, media_item_component_1, media_item_list_component_1, media_item_form_component_1, favorite_directive_1, ng_bootstrap_1, category_list_pipe_1, AppModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (media_item_component_1_1) {
                media_item_component_1 = media_item_component_1_1;
            },
            function (media_item_list_component_1_1) {
                media_item_list_component_1 = media_item_list_component_1_1;
            },
            function (media_item_form_component_1_1) {
                media_item_form_component_1 = media_item_form_component_1_1;
            },
            function (favorite_directive_1_1) {
                favorite_directive_1 = favorite_directive_1_1;
            },
            function (ng_bootstrap_1_1) {
                ng_bootstrap_1 = ng_bootstrap_1_1;
            },
            function (category_list_pipe_1_1) {
                category_list_pipe_1 = category_list_pipe_1_1;
            }
        ],
        execute: function () {
            AppModule = class AppModule {
            };
            AppModule = __decorate([
                core_1.NgModule({
                    imports: [
                        platform_browser_1.BrowserModule,
                        forms_1.ReactiveFormsModule,
                        forms_1.FormsModule,
                        ng_bootstrap_1.NgbModule.forRoot()
                    ],
                    declarations: [
                        app_component_1.AppComponent,
                        media_item_component_1.MediaItemComponent,
                        media_item_list_component_1.MediaItemListComponent,
                        media_item_form_component_1.MwMediaItemFormComponent,
                        favorite_directive_1.FavoriteDirective,
                        category_list_pipe_1.CategoryListPipe
                    ],
                    bootstrap: [
                        app_component_1.AppComponent
                    ]
                })
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    };
});
//# sourceMappingURL=app.module.js.map