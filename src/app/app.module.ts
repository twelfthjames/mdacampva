import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './universal-components/footer/app-footer.component';
import { VideoComponent } from './featured-video/app-video.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { HomeComponent } from './app-home.component';
import { AppCountdownComponent } from './app-countdown/app-countdown.component';
import { PhotosComponent } from './photos/photos.component';

const appRoutes: Routes = [
  { path: 'sponsors', component: SponsorsComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    VideoComponent,
    SponsorsComponent,
    AppCountdownComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
