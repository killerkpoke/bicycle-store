import { Component, OnInit } from '@angular/core';
import { Bike } from 'src/types/Bike';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {

  cards:Array<Bike> = [
    {name: "dolog 1", description: "random dolog", tags:["random", "another random"]},
    {name: "dolog 2", description: "random dolog 2", tags:["random"]},
    {name: "dolog 3", description: "random dolog 3", tags:["random"]},
    {name: "dolog 4", description: "random dolog 4", tags:["random"]},
  ]

  constructor() { }

  ngOnInit() {
  }

}
