import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{FormsModule} from '@angular/forms';
import{AngularFireModule } from '@angular/fire';
import{AngularFireAuthModule} from '@angular/fire/auth';
import{AngularFirestoreModule } from '@angular/fire/firestore';
import{AngularFireDatabaseModule } from '@angular/fire/database';



import { environment } from 'src/environments/environment';

import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DriversComponent } from './components/drivers/drivers.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { MapComponent } from './components/map/map.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
  
    AppComponent,
    LoginComponent,
    NavbarComponent,
    DriversComponent,
    HomeComponent,
    RegisterComponent,
    MapComponent,
    TableComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
