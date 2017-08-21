import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// Model-driven: ReactiveFormsModule, Template-driven: FormsModule
import { HttpModule, XHRBackend } from '@angular/http';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';
import { MwMediaItemFormComponent } from './media-item-form.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './service/category-list.pipe';
import { MediaItemService } from './service/media-item.service';
import { lookupListToken, lookupLists } from './providers';
import { MockXHRBackend } from './data/mock-xhr-backend';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    MwMediaItemFormComponent,
    FavoriteDirective,
    CategoryListPipe,
    FavoriteDirective,
    CategoryListPipe,
    MwMediaItemFormComponent
  ],
  providers: [
    MediaItemService,
    { provide: lookupListToken, useValue: lookupLists },
    { provide: XHRBackend, useClass: MockXHRBackend }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
