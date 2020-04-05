import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListModule } from '@bit/parekhj_roche.angular-tutorial.product-list';
import { AvatarModule } from '@bit/parekhj_roche.angular-tutorial.avatar';
import { SomeListModule } from '@bit/parekhj-roche-org.bit-angular-test.some-list';
import { CaseListModule } from "@bit/parekhj-roche-org.bit-angular-test.case-list";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductListModule,
    AvatarModule,
    SomeListModule,
    CaseListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
