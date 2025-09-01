import { createReducer, on } from "@ngrx/store";
import { LOGIN_SUCCESS, LogInStart, loginSuccess } from "./auth.actions";
import { AuthState, initialAuthState } from "./auth.state";


export function AuthReducer(state: AuthState=initialAuthState , action: any) {
  return _authReducer(state, action);
}


const _authReducer = createReducer(initialAuthState,
  on(loginSuccess, (state, action) => {
    console.log(action.user);
    return {
      ...state,
      user: action.user,
    };
  })
);
