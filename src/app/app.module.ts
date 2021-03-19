import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { Gallery1Component } from './gallery1/gallery1.component';
import { MaingalleryComponent } from './maingallery/maingallery.component';
import { Gallery2Component } from './gallery2/gallery2.component';
import { HomeComponent } from './home/home.component';
import { GenericComponent } from './generic/generic.component';
import { ElementsComponent } from './elements/elements.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ThemesComponent } from './themes/themes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    Gallery1Component,
    MaingalleryComponent,
    Gallery2Component,
    HomeComponent,
    GenericComponent,
    ElementsComponent,
    ThemesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
