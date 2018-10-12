import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderLayoutComponent} from './components/header-layout/header-layout.component';
import {SubNavComponent} from './components/sub-nav/sub-nav.component';
import {SideBarComponent} from './components/side-bar/side-bar.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {HttpModule} from '@angular/http';
// import { Page02Component } from './pages/page01/page02/page02.component';
import {Page01Component} from './pages/page01/page01.component';
import {Page02Component} from './pages/page02/page02.component';
import {Page03Component} from './pages/page03/page03.component';
import {Page04Component} from './pages/page04/page04.component';
import {Page05Component} from './pages/page05/page05.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlatpickrModule} from 'angularx-flatpickr';
import {ReadmoreComponent} from './components/readmore/readmore.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';
// import myservice
import {ModalComponent} from './components/modal/modal.component';
import {PopoverModule} from 'ngx-popover';
import {MyServiceService} from './components/service/my-service.service';
import {ConfigService} from './components/config/config.service';
import {ConfigComponent} from './components/config/config.component';
import { GoproComponent } from './pages/gopro/gopro.component';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    Page01Component,
    HeaderLayoutComponent,
    SubNavComponent,
    SideBarComponent,
    Page02Component,
    Page03Component,
    Page04Component,
    Page05Component,
    ReadmoreComponent,
    ModalComponent,
    ConfigComponent,
    GoproComponent
  ],
  imports: [
    FormsModule, FlatpickrModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    PopoverModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [MyServiceService, ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
