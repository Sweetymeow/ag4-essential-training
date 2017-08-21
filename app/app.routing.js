"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
const media_item_form_component_1 = require("./media-item-form.component");
const media_item_list_component_1 = require("./media-item-list.component");
const appRoutes = [
    { path: 'add', component: media_item_form_component_1.MwMediaItemFormComponent },
    { path: ':medium', component: media_item_list_component_1.MediaItemListComponent },
    { path: '', pathMatch: 'full', redirectTo: 'all' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map