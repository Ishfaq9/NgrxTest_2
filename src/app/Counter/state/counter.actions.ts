import { createAction, props } from "@ngrx/store";

export const INCREMENT = createAction('increment');
export const DECREMENT = createAction('decrement');
export const RESET = createAction('reset');
//export const customIncrement = createAction('customIncrement', (value: number) => ({ value }));
export const customIncrement = createAction('customIncrement', props<{ value: number }>());
export const customNameChnage = createAction('customNameChnage');