import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Appstate } from '../../store/app.state';
import { LogInStart } from '../state/auth.actions';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private store:Store<Appstate>) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
  onLoginSubmit() {
    console.log(this.loginForm.value);
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.store.dispatch(LogInStart({ email, password }));
  }
}
