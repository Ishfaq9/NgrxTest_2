import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject, Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { LogInStart, loginSuccess } from './auth.actions';
import { exhaustMap, map } from 'rxjs/operators';

@Injectable()
export class AuthEffects {


  private actions$ = inject(Actions);
  constructor( private authService: AuthService) { }

  login$ = createEffect(() => {
    alert('Effect Triggered');
    return this.actions$.pipe(
      ofType(LogInStart),
      exhaustMap((action) => {
        return this.authService.login(action.email, action.password).pipe(
          map((data) => {
            const user = this.authService.formatUser(data);
            return loginSuccess({ user });
          })
        );
      })
    );
  });
}