import { Component, Input, OnInit } from '@angular/core';
import { Tag } from 'src/types/Tag';

import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.css'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({opacity: 0}),
        animate(500, style({opacity: 1}))
      ])
    ]),
    trigger('tinyBig', [
      state('tiny', style({
        opacity: 1,
        scale: 1
      })),
      state('big', style({
        opacity: 0.75,
        scale: 1.03
      })),

      transition('tiny => big', [
        animate(200)
      ]),
      transition('big => tiny', [
        animate(200)
      ])
    ])
  ]
})
export class MyCardComponent implements OnInit {
  @Input() name: string = '';
  @Input() description: string = '';
  @Input() tags: Array<Tag> = [];

  isHovered = false;

  constructor() {}

  ngOnInit() {}
}
