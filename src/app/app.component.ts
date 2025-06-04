import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from "./Counter/counter/counter.component";
import { HeaderComponent } from "./shared/components/header/header.component";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HeaderComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NgrxTest_2';
}
