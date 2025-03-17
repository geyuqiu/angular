import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-name-input',
  standalone: true,
  imports: [],
  templateUrl: './name-input.component.html',
  styleUrl: './name-input.component.css'
})
export class NameInputComponent {
  private inputValue = '';
  @Output()
  nameSubmitted
    = new EventEmitter<string>();

  onKey($event: KeyboardEvent) {
    console.log('onKey', this.inputValue);
    this.inputValue = ($event.target as HTMLInputElement)
      .value;
  }

  onEnter() {
    console.log('enter pressed', this.inputValue);
    this.nameSubmitted.emit(this.inputValue);
  }
}
