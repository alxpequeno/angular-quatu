import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';
import { map } from 'rxjs/operators';
import { Categoria } from '../interfaces/categoria.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  listadoURL = "http://localhost:8080/api-quatu/producto/listado";
  registrarURL = "http://localhost:8080/api-quatu/producto/registrar";
  obtenerURL = "http://localhost:8080/api-quatu/producto/";
  eliminarURL = "http://localhost:8080/api-quatu/producto/eliminar";
  categoriasURL = "http://localhost:8080/api-quatu/categoria/listado";
  obtenerCategoriaUrL = "http://localhost:8080/api-quatu/categoria/";
  listaxNombreURL = "http://localhost:8080/api-quatu/producto/buscar/";
  listaxCategoriaURL = "http://localhost:8080/api-quatu/producto/categoria/";


  categorias: Categoria[] = [];

  constructor(private _http: HttpClient) {
    this.getListadoCategorias().subscribe((data: any) => {
      this.categorias = data;
    })
  }

  obtenerCategoria(codigo: number) {
    return this._http.get(this.obtenerCategoriaUrL + codigo.toString());
  }

  eliminarProducto(producto: Producto) {

    let body = JSON.stringify(producto);

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this._http.post(this.eliminarURL, body, { headers })
      .pipe(
        map(res => {
          return res;
        })
      );
  }

  getListadoCategorias() {
    return this._http.get(this.categoriasURL);
  }

  getProducto(codigo: number) {
    return this._http.get(this.obtenerURL + codigo.toString());
  }

  getListadoProductosNombre(nombre: string) {
    return this._http.get(this.listaxNombreURL + nombre.toString());
  }

  getListadoProductosCategoria(categoria: string) {
    return this._http.get(this.listaxCategoriaURL + categoria.toString());
  }

  getListadoProductos() {
    return this._http.get(this.listadoURL);
  }

  getListadoProductosxProveedor(id: number) {
    return this._http.get(this.listadoURL + "/" + id.toString());
  }

  registrarProducto(producto: Producto) {

    let body = JSON.stringify(producto);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this._http.post(this.registrarURL, body, { headers })
      .pipe(
        map(res => {
          return res;
        })
      );


  }
}
