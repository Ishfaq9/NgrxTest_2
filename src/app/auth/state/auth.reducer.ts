import { AuthState, initialAuthState } from "./auth.state";

export function authReducer(state: AuthState, action: any) {
  return _authReducer(state, action);
}

const _authReducer = (state: AuthState, action: any) => {
  initialAuthState
}