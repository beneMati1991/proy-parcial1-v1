import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component';
import { ClientAccountComponentComponent } from './components/client-account-component/client-account-component.component';
import { AccessMediaComponentComponent } from './components/access-media-component/access-media-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    NavbarComponentComponent,
    ClientAccountComponentComponent,
    AccessMediaComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
