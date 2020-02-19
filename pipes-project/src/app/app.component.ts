import { Component } from '@angular/core';
import { NumberSymbol } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  date: string;
  amount: number;
  height: number;
  miles: number;

  car = {
    make: 'Toyota',
    model: 'Corola',
    year: 1980
  }

  onMilesChange(value: string){
    this.miles = parseFloat(value);
  }
  onHeightChange(value: string){
    this.height = parseFloat(value);
  }

  onNameChange(value: string){
    this.name = value;
  }
  onDataChange(value:string){
    this.date = value;
  }
  onAmountChange(value:string){
    this.amount = parseFloat(value);
  }
}
