import { Routes } from "@angular/router";
import { CounterComponent } from "./counter/counter.component";
import { counterReducer } from "./state/counter.reducer";
import { provideState } from "@ngrx/store";

export const counterModule: Routes = [
    {
      path: '',
      component: CounterComponent,
      providers:[
        provideState({ name: 'counter', reducer: counterReducer })
      ]
    },
  ];