import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from "./Counter/counter/counter.component";
import { HeaderComponent } from "./shared/components/header/header.component";
import { LoadSpinnerComponent } from "./shared/components/load-spinner/load-spinner.component";
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { getErrorMessage } from './shared/components/shared.selector';
import { Appstate } from './store/app.state';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  errorMessage: Observable<string>| null = null;

  constructor(private store: Store<Appstate>) {}

  ngOnInit() {
    this.errorMessage = this.store.select(getErrorMessage);
  }

}
