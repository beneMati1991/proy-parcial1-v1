import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AccessMediaComponent } from './components/access-media/access-media.component';
import { ClientAccountComponent } from './components/client-account/client-account.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {  path: '', component: LoginComponent  },
  {  path: "home", component: HomeComponent  },
  {  path: "clientAccount", component: ClientAccountComponent  },
  {  path: "accessMedia", component: AccessMediaComponent  },
  {  path: "**", component: AboutComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
