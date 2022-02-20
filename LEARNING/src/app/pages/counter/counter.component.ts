import { Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  result = 0;

  add(): void{
    this.result = this.result + 1;
  }
 
  subtract(): void{
   this.result = this.result -1;
 }
}
