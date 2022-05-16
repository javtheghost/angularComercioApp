import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';
import { HomeComponent } from './views/home/home.component';
import { CreateComponent } from './views/products/create/create.component';
import { EditComponent } from './views/products/edit/edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch:'full'},
  { path:'login', component:LoginComponent},
  { path:'home', component:HomeComponent},
  { path:'edit', component:EditComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponentes = [LoginComponent, HomeComponent, RegisterComponent, CreateComponent]
