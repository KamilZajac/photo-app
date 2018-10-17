import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PhotoListComponent} from './application/photo-list/photo-list.component';
import {PhotoDetailsComponent} from './application/photo-details/photo-details.component';
import {LandingComponent} from './application/landing/landing.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'photos',
    component: PhotoListComponent,
  },
  {
    path: 'photos/details/:id',
    component: PhotoDetailsComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  declarations: [],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {
}


