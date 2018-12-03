import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ProductoService } from 'src/app/services/producto.service';
import { Categoria } from 'src/app/interfaces/categoria.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit {


  lstProductos: Producto[] = [];
  categorias: Categoria[] = [];

  constructor(private _productoService: ProductoService, private activatedRoute: ActivatedRoute, private _router: Router) {


    this.activatedRoute.params.subscribe(params => {

      if (params['nombre'] != null && params['nombre'] != "") {
        this._productoService.getListadoProductosNombre(params['nombre']).subscribe((data: any) => {
          this.lstProductos = data;
          console.log(this.lstProductos);
        });
      } else if (params['categoria'] != null && params['categoria'] != "") {
        this._productoService.getListadoProductosCategoria(params['categoria']).subscribe((data: any) => {
          this.lstProductos = data;
          console.log(this.lstProductos);
        });
      } else {
        this._productoService.getListadoProductos().subscribe((data: any) => {
          this.lstProductos = data;
          console.log(this.lstProductos);
        });
      }

    });
  }



  ngOnInit() {
    /* this._productoService.getListadoProductos().subscribe((data: any) => {
      this.lstProductos = data;
      console.log(this.lstProductos);
    }); */
    this._productoService.getListadoCategorias().subscribe((data: any) => {
      this.categorias = data;
      console.log(this.lstProductos);
    });
  }


  buscarCategoria(codigo) {
    this._router.navigate(['/categoria', codigo.toString()]);
  }

}
