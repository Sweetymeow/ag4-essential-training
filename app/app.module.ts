import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// Model-driven: ReactiveFormsModule, Template-driven: FormsModule

import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';
import { MwMediaItemFormComponent } from './media-item-form.component';

import { FavoriteDirective } from './favorite.directive';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryListPipe } from './service/category-list.pipe';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    MwMediaItemFormComponent,
    FavoriteDirective,
    CategoryListPipe
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
