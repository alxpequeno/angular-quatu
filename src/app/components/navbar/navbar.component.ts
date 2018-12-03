import { Component, OnInit } from '@angular/core';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _proveedorService: ProveedorService, private _router: Router) { }

  ngOnInit() {
  }

  isLogueado(): boolean {

    if (this._proveedorService.proveedor == null) return false;
    else return true;

  }

  logout() {
    this._proveedorService.proveedor = null;
    this._router.navigate(['/home']);
  }

}
