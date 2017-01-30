import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ProfileComponent }  from './profile.component';
import { ContactComponent }  from './contact.component';

const routes:Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' } ,
  { path: 'about', component: ProfileComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
