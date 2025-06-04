import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { INCREMENT,   DECREMENT, RESET } from '../state/counter.actions';

@Component({
    selector: 'app-counter-buttons',    
    imports: [],
    templateUrl: './counter-buttons.component.html',
    styleUrl: './counter-buttons.component.css'
})
export class CounterButtonsComponent {

// @Output() onincrement = new EventEmitter<void>();
// @Output() ondeccrement = new EventEmitter<void>();
// @Output() onreset = new EventEmitter<void>();



// onDeccrement() {
// this.ondeccrement.emit();
// }

// onReset() {
// this.onreset.emit();

// }
// onIncrement() {
// this.onincrement.emit();
// }

constructor(private store: Store<{counter :{counter:number}}>) { }
onIncrement() {
    this.store.dispatch(INCREMENT()); 
}
onDecrement() {
    this.store.dispatch(DECREMENT());
}
onReset() {
    this.store.dispatch(RESET());
}

}
