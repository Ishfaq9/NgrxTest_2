import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject, Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { LogInStart, loginSuccess } from './auth.actions';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { setErrorMessage } from '../../shared/components/shared.actions';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { Appstate } from '../../store/app.state';

@Injectable()
export class AuthEffects {


  private actions$ = inject(Actions);
  constructor( private authService: AuthService,private store: Store<Appstate>) { }

  login$ = createEffect(() => {
    alert('Effect Triggered');
    return this.actions$.pipe(
      ofType(LogInStart),
      exhaustMap((action) => {
        return this.authService.login(action.email, action.password).pipe(
          map((data) => {
             this.store.dispatch(setErrorMessage({ message: '' }));
            const user = this.authService.formatUser(data);
            return loginSuccess({ user });
          }),
          catchError((errResp) => {
            const errorMessage = this.authService.getErrorMessage(
              errResp.error.error.message
            );
            return of(setErrorMessage({ message: errorMessage }));
          })
        );
      })
    );
  });
}