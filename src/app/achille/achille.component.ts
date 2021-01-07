import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import dices from './dice'

@Component({
  selector: 'app-achille',
  templateUrl: './achille.component.html',
  styleUrls: ['./achille.component.scss'],
})
export class AchilleComponent implements OnInit {
  dices = dices
  results = []

  constructor() {}

  ngOnInit() {

  }

  getResult(results) {
    console.log(results)
    this.results = results
  }
}
