import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AccessMediaComponentComponent } from './components/access-media-component/access-media-component.component';
import { ClientAccountComponentComponent } from './components/client-account-component/client-account-component.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {  path: '', component: LoginComponent  },
  {  path:"home", component: HomeComponentComponent  },
  {  path: "clientAccount", component: ClientAccountComponentComponent  },
  {  path: "accessMedia", component: AccessMediaComponentComponent  },
  {  path:"**", component: AboutComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
