import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { getCounter } from '../state/counter.selector';
import { Appstate } from '../../store/app.state';

@Component({
    selector: 'app-counter-output',
    imports: [CommonModule],
    templateUrl: './counter-output.component.html',
    styleUrl: './counter-output.component.css'
})
export class CounterOutputComponent {

  //counter : number = 0;
  counter$!: Observable< number >;
  //@Input() counter: number = 0;
  // constructor(private store: Store<{counter : CounterState}>) { }
  constructor(private store: Store<Appstate>) { }

  ngOnInit() {

    // this.store.select(getCounter).subscribe((counter) => {
    //   this.counter = counter;
    //   console.log('THE VALUE IS :'+this.counter);
    // });
    this.counter$ = this.store.select(getCounter);

  }

}
