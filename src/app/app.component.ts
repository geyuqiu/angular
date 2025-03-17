import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from './components/hello/hello.component';
import { HelloListComponent } from './components/hello-list/hello-list.component';
import { HelloClickComponent } from './components/hello-click/hello-click.component';
import { HelloInputComponent } from './components/hello-input/hello-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HelloComponent, HelloListComponent, HelloClickComponent, HelloInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-workshop-17032025';
}
