import { BrowserModule } from '@angular/platform-browser';
import { NgModule, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AgmCoreModule, FitBoundsAccessor, AgmMarker } from '@agm/core'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      //add apikey

      apiKey: ''
    })
  ],
  providers: [{ provide: FitBoundsAccessor, useExisting: forwardRef(() => AgmMarker) }],
  bootstrap: [AppComponent]
})
export class AppModule { }
