import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss'],
})
export class RulesComponent implements OnInit {
  page1 : boolean;
  page2 : boolean;
  constructor() { }

  ngOnInit() {
    this.page1 = true;
    this.page2 = false;
  }

  changePage(){
    if(this.page1)
    {
      this.page1 = false;
      this.page2 = true;
    }else{
      this.page2 = false;
      this.page1 = true;
    }
  }

}
