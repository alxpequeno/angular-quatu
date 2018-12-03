import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Proveedor } from '../interfaces/proveedor.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  proveedor:Proveedor = null;

  registrarURL = "http://localhost:8080/api-quatu/proveedor/registrar";
  loginURL="http://localhost:8080/api-quatu/proveedor/login";

  constructor(private _http: HttpClient) { }

  login(u:Proveedor) {

    let body = new URLSearchParams();
    body.set('p_correo', u.correo);
    body.set('p_contrasena', u.contrasena);

    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  };

    return this._http.post(this.loginURL, body.toString(), options).pipe(
      map(res => {
        return res;
      })
    );


  }

  registrarProveedor(proveedor: Proveedor) {

    let body = new URLSearchParams();
    body.set('p_empresa', proveedor.empresa);
    body.set('p_ruc', proveedor.ruc);
    body.set('p_contacto', proveedor.contacto);
    body.set('p_dni', proveedor.dni);
    body.set('p_correo', proveedor.correo);
    body.set('p_direccion', proveedor.direccion);
    body.set('p_departamento', proveedor.departamentoId.toString());
    body.set('p_contrasena', proveedor.contrasena);

    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  };

    return this._http.post(this.registrarURL, body.toString(), options).pipe(
      map(res => {
        return res;
      })
    );

  }
}
