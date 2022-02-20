import { Component, EventEmitter, Input, Output, } from '@angular/core';

import { CatFact } from '../../../shared/models/cat-fact.models';

@Component({
  selector: 'app-cat-fact-card',
  templateUrl: './cat-fact-card.component.html',
  styleUrls: ['./cat-fact-card.component.scss']
})
export class CatFactCardComponent {
  @Input() 
  fact?: CatFact;

  @Input()
  index?: number;

  @Output()
  sayHiEvent = new EventEmitter<string>()

  sayHi(): void {
    this.sayHiEvent.emit('Hey');
  }

}
