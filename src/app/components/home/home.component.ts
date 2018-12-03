import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  txtBuscar:string = "";

  constructor(private _router:Router) { }

  ngOnInit() {
  }

  verBusqueda() {
    this._router.navigate(['/buscar',this.txtBuscar]);
  }

}
