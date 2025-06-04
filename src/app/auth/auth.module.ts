import { Component } from "@angular/core";
import { routes } from "../app.routes";
import { LoginComponent } from "./login/login.component";
import { Routes } from "@angular/router";


export const AuthRoutes: Routes = [
    {
        path: '',
        children: [
          { path: '', component: LoginComponent },
          { path: 'login', component: LoginComponent },
          // { path: 'signUp', component:  },
        ],
      },
]