import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

import {MaterialModule} from './material.module';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title="first-app"

  nummer = Math.floor(Math.random()*100)+1;
  hogerLager = "";
  overigeBeurten = 10;
  getal;
  raad() {
    this.getal = parseFloat((<HTMLInputElement>document.getElementById("getal")).value);
    if (this.getal < this.nummer) {
      this.hogerLager = "hoger";
    }
    else if (this.getal > this.nummer) {
      this.hogerLager = "lager";
    }
    else {
      window.alert("Je hebt gewonnen!");
      window.location.reload();
    }
    this.overigeBeurten -= 1;
    if (this.overigeBeurten == 0 && this.getal != this.nummer) {
      window.alert("Geen beurten meer. Verloren!");
      window.location.reload();
    }
  }

  seconden : number;
  timer = setInterval(function() {
    CounterService.counter -=1;
    this.seconden = CounterService.counter;
    document.getElementById("tijd").innerHTML = this.seconden;
    if (this.seconden < 0) {
      window.alert("Je tijd is op. Verloren!");
      window.location.reload();
    }
  }, 1000);

  
}