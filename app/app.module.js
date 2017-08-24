"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
// Model-driven: ReactiveFormsModule, Template-driven: FormsModule
const http_1 = require("@angular/http");
const app_routing_1 = require("./app.routing");
const app_component_1 = require("./app.component");
const media_item_component_1 = require("./media-item.component");
const media_item_list_component_1 = require("./media-item-list.component");
const media_item_form_component_1 = require("./media-item-form.component");
const ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
const favorite_directive_1 = require("./favorite.directive");
const category_list_pipe_1 = require("./service/category-list.pipe");
const media_item_service_1 = require("./service/media-item.service");
const providers_1 = require("./providers");
const mock_xhr_backend_1 = require("./data/mock-xhr-backend");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.ReactiveFormsModule,
            forms_1.FormsModule,
            ng_bootstrap_1.NgbModule.forRoot(),
            http_1.HttpModule,
            app_routing_1.routing
        ],
        declarations: [
            app_component_1.AppComponent,
            media_item_component_1.MediaItemComponent,
            media_item_list_component_1.MediaItemListComponent,
            media_item_form_component_1.MwMediaItemFormComponent,
            favorite_directive_1.FavoriteDirective,
            category_list_pipe_1.CategoryListPipe,
            favorite_directive_1.FavoriteDirective,
            category_list_pipe_1.CategoryListPipe,
            media_item_form_component_1.MwMediaItemFormComponent
        ],
        providers: [
            media_item_service_1.MediaItemService,
            { provide: 'lookupListToken', useValue: providers_1.lookupLists },
            // { provide: lookupListToken, useValue: lookupLists },
            { provide: http_1.XHRBackend, useClass: mock_xhr_backend_1.MockXHRBackend }
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map