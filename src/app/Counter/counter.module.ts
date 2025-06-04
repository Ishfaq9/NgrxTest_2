import { Routes } from "@angular/router";
import { CounterComponent } from "./counter/counter.component";

export const counterModule: Routes = [
    {
      path: '',
      component: CounterComponent,
    },
  ];