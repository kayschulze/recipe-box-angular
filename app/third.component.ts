import { Component, Input } from '@angular/core';

@Component({
  selector: 'third-component',
  template: `
  <h1>{{text}}</h1>
  `
})

export class ThirdComponent{
  @Input() text: string;
}
