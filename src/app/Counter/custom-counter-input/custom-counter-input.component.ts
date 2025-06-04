import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { customIncrement, customNameChnage } from '../state/counter.actions';
import { getText } from '../state/counter.selector';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-counter-input',
  imports: [FormsModule,CommonModule],
  templateUrl: './custom-counter-input.component.html',
  styleUrl: './custom-counter-input.component.css'
})
export class CustomCounterInputComponent {

  value: number=0;
  name$!: Observable<string> ;
  constructor(private store:Store<{counter:CounterState}>) { }

  ngOnInit() {
    // this.store.select('counter').subscribe((data) => {
    //   this.name = data.text;
    // });
    // this.store.select(getText).subscribe((text) => {
    //   this.name = text;
    // });
    this.name$= this.store.select(getText);
  }



  add() {
    this.store.dispatch(customIncrement({value:this.value}));
  }
  changeName()
  {
    this.store.dispatch(customNameChnage());
  }

}
