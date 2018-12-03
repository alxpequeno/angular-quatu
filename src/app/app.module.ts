import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { APP_ROUTING } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarProveedorComponent } from './components/registrar-proveedor/registrar-proveedor.component';
import { LoginComponent } from './components/login/login.component';
import { ListadoProductosComponent } from './components/listado-productos/listado-productos.component';
import { TarjetaProductoComponent } from './components/tarjeta-producto/tarjeta-producto.component';
import { RegistrarProductoComponent } from './components/registrar-producto/registrar-producto.component';
import { ContactarComponent } from './components/contactar/contactar.component';
import { PerfilComponent } from './components/perfil/perfil.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RegistrarProveedorComponent,
    LoginComponent,
    ListadoProductosComponent,
    TarjetaProductoComponent,
    RegistrarProductoComponent,
    ContactarComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
