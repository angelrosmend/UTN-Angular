import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nombre = "Nombre_persona";
  nuevoNombre = ""
  modificado = false;
  constructor() { }
  cambiarNombre(){
    if(this.nuevoNombre == ""){
      alert("Ingrese un nombre")
    }else{
    this.nombre = this.nuevoNombre
    this.modificado = true
    }
  }
  ngOnInit(): void {
  }

}
