import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ProductoService } from 'src/app/services/producto.service';
import { Router } from '@angular/router';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { Categoria } from 'src/app/interfaces/categoria.interface';

@Component({
  selector: 'app-registrar-producto',
  templateUrl: './registrar-producto.component.html',
  styleUrls: ['./registrar-producto.component.css']
})
export class RegistrarProductoComponent implements OnInit {

  producto: Producto = null;
  categorias: Categoria[] = [];

  constructor(private _productoService: ProductoService, private _router: Router, private _proveedorService: ProveedorService) {
    this.producto = <Producto>{
      nombre: "",
      descripcion: "",
      precioMin: 0,
      precioMax: 0,
      medida: "",
      categoria: 1,
      region: "",
      resumen: "",
      proveedor: 1,
      foto: "",
    }

    this.categorias = _productoService.categorias;
  }

  ngOnInit() {
   
  }

  registrarProducto() {
    console.log(this.producto);

    let proveedor = this._proveedorService.proveedor;

    if (proveedor != null) {
      this.producto.proveedor = proveedor.id;
    }

    this._productoService.registrarProducto(this.producto).subscribe(
      data => {
        if (data == null || data == "") {
          this._router.navigate(['/home']);
        } else {
          alert("Producto no registrado");
        }
      },
      error => console.error(error));
  }

}
