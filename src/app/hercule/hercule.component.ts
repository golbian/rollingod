import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import dices from './dice'

@Component({
  selector: 'app-hercule',
  templateUrl: './hercule.component.html',
  styleUrls: ['./hercule.component.scss'],
})
export class HerculeComponent implements OnInit {
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
