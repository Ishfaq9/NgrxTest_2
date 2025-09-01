import { Component } from "@angular/core";
import { routes } from "../app.routes";
import { LoginComponent } from "./login/login.component";
import { Routes } from "@angular/router";
import { provideState } from "@ngrx/store";
import { AuthReducer } from "./state/auth.reducer";
import { AUTH_STATE_NAME } from "./state/auth.selector";

import { provideEffects, EffectsModule } from "@ngrx/effects";
import { AuthEffects } from "./state/auth.effect";
import { SHARED_STATE_NAME } from "../shared/components/shared.selector";
import { SharedReducer } from "../shared/components/shared.reducer";


export const AuthModule: Routes = [
    {
        path: '',
        children: [
          { path: '', component: LoginComponent },
          { path: 'login', component: LoginComponent },
          // { path: 'signUp', component:  },
        ],
        providers:[
          provideState(AUTH_STATE_NAME, AuthReducer),
          provideEffects([AuthEffects])
        ]
      },
]