import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { CatFactService } from '../../shared/services/cat-facts.service';
import { CatFact } from "../../shared/models/cat-fact.models";


@Component({
  selector: 'app-cat-facts',
  templateUrl: './cat-facts.component.html',
  styleUrls: ['./cat-facts.component.scss']
})
export class CatFactsComponent implements OnInit {
  facts$?: Observable<CatFact[]>;
  
  constructor(private catFactService: CatFactService) {
   }

  ngOnInit(): void {
    this.facts$ = this.catFactService.getCatFacts();
  }

  sayHi(message: string):void {
console.log(message);
  }
}
