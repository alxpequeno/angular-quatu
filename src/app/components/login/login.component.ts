import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/interfaces/proveedor.interface';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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


  login() {
    this._proveedorService.login(this.proveedor).subscribe(
      (data: any) => {
        
        if (data == null) {
          alert("Usuario no registrado");
        } else {
          this._proveedorService.proveedor = data;
          console.log(this._proveedorService.proveedor);
          this._router.navigate(['/home']);
        }
      },
      error => console.error(error));
  }

}
