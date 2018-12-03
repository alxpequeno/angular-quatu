import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component';
import { RegistrarProveedorComponent } from './components/registrar-proveedor/registrar-proveedor.component';
import { LoginComponent } from './components/login/login.component';
import { ListadoProductosComponent } from './components/listado-productos/listado-productos.component';
import { RegistrarProductoComponent } from './components/registrar-producto/registrar-producto.component';
import { ContactarComponent } from './components/contactar/contactar.component';
import { PerfilComponent } from './components/perfil/perfil.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'registrar-proveedor', component: RegistrarProveedorComponent },
    { path: 'login', component: LoginComponent },
    { path: 'listado-productos', component: ListadoProductosComponent },
    { path: 'registrar-producto', component: RegistrarProductoComponent },
    { path: 'producto/:codigo', component: ContactarComponent },
    { path: 'perfil', component: PerfilComponent },
    { path: 'buscar/:nombre', component: ListadoProductosComponent },
    { path: 'categoria/:categoria', component: ListadoProductosComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);