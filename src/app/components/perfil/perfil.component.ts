import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ProveedorService } from 'src/app/services/proveedor.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  lstProductos: Producto[] = []

  constructor(private _serviceProducto: ProductoService, private _serviceProveedor: ProveedorService) {



  }

  actualizarLista() {
    var id: number;

    if (this._serviceProveedor.proveedor == null) id = 1;
    else id = this._serviceProveedor.proveedor.id;

    this._serviceProducto.getListadoProductosxProveedor(id).subscribe(
      (data: any) => {
        this.lstProductos = data;
        console.log(this.lstProductos);
      }
    )
  }

  eliminar(producto: Producto) {

    this._serviceProducto.eliminarProducto(producto).subscribe(data => {
      this.actualizarLista();
    });

  }

  ngOnInit() {
    this.actualizarLista();
  }

}
