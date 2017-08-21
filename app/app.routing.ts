import { Routes, RouterModule } from '@angular/router';

import { MwMediaItemFormComponent } from './media-item-form.component';
import { MediaItemListComponent } from './media-item-list.component';

const appRoutes: Routes = [
  { path: 'add', component: MwMediaItemFormComponent },
  { path: ':medium', component: MediaItemListComponent },
  { path: '', pathMatch: 'full', redirectTo: 'all' }
];

export const routing = RouterModule.forRoot(appRoutes);
