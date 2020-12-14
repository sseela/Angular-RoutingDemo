import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OfficeComponent } from './office/office.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent}, 
  {path: 'office/:id', component: OfficeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
