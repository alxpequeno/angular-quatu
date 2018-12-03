import { Component, OnInit, Input } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-tarjeta-producto',
  templateUrl: './tarjeta-producto.component.html',
  styleUrls: ['./tarjeta-producto.component.css']
})
export class TarjetaProductoComponent implements OnInit {

  @Input() items: Producto[]

  constructor(private router: Router, private _productoService: ProductoService) { }

  ngOnInit() {
  }

  contactar(item: Producto) {

    let productoId = item.codigo;

    this.router.navigate(['producto', productoId]);

  }

  cargarCategoria(codigo: number): string {

    let categoria = "";

    switch (codigo) {
      case 1: categoria = "Aves y Carnes"; break;
      case 2: categoria = "Frutas y Verduras"; break;
      case 3: categoria = "Pescados y Mariscos"; break;
    }

    return categoria;

  }
}
