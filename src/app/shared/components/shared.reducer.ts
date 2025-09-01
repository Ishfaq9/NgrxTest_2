
import { Action, createReducer, on } from '@ngrx/store';
import { initialState, SharedState } from './shared.state';
import { setErrorMessage } from './shared.actions';

const _sharedReducer = createReducer(
  initialState,
  on(setErrorMessage, (state, action) => {
    return {
      ...state,
      errorMessage: action.message,
    };
  })
);

//export function SharedReducer(state: SharedState, action: Action<any>) {
export function SharedReducer(state: SharedState | undefined = initialState, action: Action): SharedState {
  return _sharedReducer(state, action);
}