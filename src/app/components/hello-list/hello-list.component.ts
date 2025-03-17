import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-list',
  standalone: true,
  imports: [],
  templateUrl: './hello-list.component.html',
  styleUrl: './hello-list.component.css'
})
export class HelloListComponent {
  names: string[] = ['Manu', 'Christian', 'Maxi'];
}
