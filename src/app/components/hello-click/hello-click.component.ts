import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-click',
  standalone: true,
  imports: [],
  templateUrl: './hello-click.component.html',
  styleUrl: './hello-click.component.css'
})
export class HelloClickComponent {
  buttonWasClicked: boolean = false;

  sayHello() {
    this.buttonWasClicked = !this.buttonWasClicked;
  }
}
