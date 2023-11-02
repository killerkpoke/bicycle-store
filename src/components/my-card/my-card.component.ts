import { Component, Input, OnInit } from '@angular/core';
import { Tag } from 'src/types/Tag';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.css']
})
export class MyCardComponent implements OnInit {

  @Input() name:string = '';
  @Input() description:string = '';
  @Input() tags:Array<Tag> = [];

  constructor() { }

  ngOnInit() {
  }

}
