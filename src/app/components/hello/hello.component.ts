import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent {
  @Input()
  name: string = '';

  get displayName(): string {
    if (this.name) {
      return this.name;
    }
    return 'World';
  }
}
