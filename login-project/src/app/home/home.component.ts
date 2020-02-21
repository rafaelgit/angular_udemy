// import { Component, OnInit, Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { ActivatedRoute } from '@angular/router';
// import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
// export class HomeComponent implements OnInit {
  export class HomeComponent {

username = "Falta importar de login"

// constructor(public activatedRoute: ActivatedRoute) {}
constructor(public activatedRoute: Router) {
  this.username = this.activatedRoute.getCurrentNavigation().extras.state.username;
}


public numero1:number;
public numero2:number;
public resultado:number;

somar(){
  this.resultado = this.numero1 + this.numero2
}

subtrair(){
  this.resultado = this.numero1 - this.numero2
}

multiplicar(){
  this.resultado = this.numero1 * this.numero2
}

dividir(){
  this.resultado = (this.numero1) / (this.numero2)
}

//  ngOnInit() {
//   console.log(this.activatedRoute.snapshot.params)
// }

}
