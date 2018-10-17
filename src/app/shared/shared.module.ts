import {NgModule} from '@angular/core';
import {PhotoPipe} from './pipes/photo.pipe';
import { LoaderComponent } from './ui/loader/loader.component';


@NgModule({
  declarations: [PhotoPipe, LoaderComponent],
  exports: [PhotoPipe, LoaderComponent]

})
export class SharedModule {
}
