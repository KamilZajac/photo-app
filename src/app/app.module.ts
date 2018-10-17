import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PhotoListComponent} from './application/photo-list/photo-list.component';
import {HttpClientModule} from '@angular/common/http';
import {PhotoDetailsComponent} from './application/photo-details/photo-details.component';
import {AppRoutingModule} from './app.routing.module';
import {SharedModule} from './shared/shared.module';
import {ComponentsModule} from './components/components.module';
import { LandingComponent } from './application/landing/landing.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PhotoListComponent,
    PhotoDetailsComponent,
    LandingComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ComponentsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
