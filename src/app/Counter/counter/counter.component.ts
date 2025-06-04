import { Component } from '@angular/core';
import { CounterOutputComponent } from "../counter-output/counter-output.component";
import { CounterButtonsComponent } from "../counter-buttons/counter-buttons.component";
import { CustomCounterInputComponent } from "../custom-counter-input/custom-counter-input.component";

@Component({
    selector: 'app-counter',
    imports: [CounterOutputComponent, CounterButtonsComponent, CustomCounterInputComponent],
    templateUrl: './counter.component.html',
    styleUrl: './counter.component.css'
})
export class CounterComponent {

  // counter : number = 5;

  // constructor () { }  

  // onincrement() {
  //   this.counter++;
  // }
  // ondecrement() {
  //   this.counter--;
  // }
  // onreset() {
  //   this.counter = 0;
  // }
  

}
