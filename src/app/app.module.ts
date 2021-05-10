import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component';
import { ClientAccountComponentComponent } from './components/client-account-component/client-account-component.component';
import { AccessMediaComponentComponent } from './components/access-media-component/access-media-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { AboutComponent } from './components/about/about.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponentComponent,
    ClientAccountComponentComponent,
    AccessMediaComponentComponent,
    HomeComponentComponent,
    AboutComponent,
    SideNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
