import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import localeEsVe from '@angular/common/locales/es-VE';
import localeFrCA from '@angular/common/locales/fr-CA';
import localeEnUm from '@angular/common/locales/en-UM';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEsVe);
registerLocaleData(localeFrCA);
registerLocaleData(localeEnUm);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-VE' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
