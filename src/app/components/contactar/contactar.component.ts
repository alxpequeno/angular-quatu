import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { Proveedor } from 'src/app/interfaces/proveedor.interface';

@Component({
  selector: 'app-contactar',
  templateUrl: './contactar.component.html',
  styleUrls: ['./contactar.component.css']
})
export class ContactarComponent implements OnInit {

  producto: Producto = null;
  proveedor:Proveedor=null;

  constructor(private activatedRoute: ActivatedRoute, private _productoServicio: ProductoService,private _proveedorService:ProveedorService) {
    
    this.proveedor = _proveedorService.proveedor;
    
    this.activatedRoute.params.subscribe(params => {

      let codigo: number = params['codigo'];

      this.getProducto(codigo);


    })
  }

  ngOnInit() {
  }

  getProducto(codigo: number) {
    console.log(codigo);

    this._productoServicio.getProducto(codigo).subscribe(
      (data:any) => {
        this.producto=data;
        console.log(this.producto);
      },
      error => console.error(error));

  }

}
