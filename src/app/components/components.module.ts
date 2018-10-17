import {NgModule} from '@angular/core';
import {SinglePhotoComponent} from './single-photo/single-photo.component';
import { NavbarComponent } from './navbar/navbar.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';


@NgModule({
  imports: [CommonModule, RouterModule, FormsModule],
  declarations: [SinglePhotoComponent, NavbarComponent],
  exports: [SinglePhotoComponent, NavbarComponent]

})
export class ComponentsModule {
}
