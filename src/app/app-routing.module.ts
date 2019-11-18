import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';

import {RegisterComponent} from './components/register/register.component';

import {DriversComponent} from './components/drivers/drivers.component';

import {TableComponent} from './components/table/table.component';

import {MapComponent} from './components/map/map.component';

const routes: Routes = [
{
path:'login',
component: LoginComponent,
},
{path:'table',component:TableComponent},
{path:'register',component:RegisterComponent},
{path:'map',component:MapComponent},
{path:'drivers',component:DriversComponent},

{path:'home',component:HomeComponent},

{path:'',
redirectTo:'/home',
pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
