import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adivinar',
  templateUrl: './adivinar.component.html',
  styleUrls: ['./adivinar.component.css']
})
export class AdivinarComponent implements OnInit {

  numero_adivinar = 5;
  numero;
  mensaje="";
  cssGano="";

  constructor() { }

  adivinar(){
    if(this.numero == this.numero_adivinar){
      this.mensaje = "Gano"
      this.cssGano = "gano"
    }else if(this.numero < this.numero_adivinar){
      this.mensaje = "Coloque un numero mayor"
      this.cssGano = "mayor"
    }else if (this.numero > this.numero_adivinar){
      this.mensaje = "Coloque un numero menor"
      this.cssGano = "menor"
    }else{
      this.mensaje = "No es un numero"
      this.cssGano = "nonumero"
    }
  }
  ngOnInit(): void {
  }

}
