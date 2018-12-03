import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/interfaces/proveedor.interface';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-proveedor',
  templateUrl: './registrar-proveedor.component.html',
  styleUrls: ['./registrar-proveedor.component.css']
})
export class RegistrarProveedorComponent implements OnInit {

  proveedor: Proveedor = null;

  constructor(private _proveedorService: ProveedorService, private _router: Router) {
    this.proveedor = <Proveedor>{
      empresa: "",
      ruc: "",
      contacto: "",
      dni: "",
      correo: "",
      direccion: "",
      departamentoId: 1,
      contrasena: ""
    }
  }

  ngOnInit() {
  }

  registrarProveedor(): void {
    console.log(this.proveedor);

    this._proveedorService.registrarProveedor(this.proveedor).subscribe(
      data => {
        if (data == null || data == "") {
          this._router.navigate(['/home']);
        } else {
          alert("Usuario no registrado");
        }
      },
      error => console.error(error));
  }


}
