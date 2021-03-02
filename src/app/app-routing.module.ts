import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path: '', redirectTo:'/appComponent', pathMatch: 'full'},
  {path: 'appComponent', component: AppComponent},
  {path: 'userComponent', component: UserComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
