import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bike } from 'src/types/Bike';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {

  cards:Array<Bike> = [
    {id: 1, name: "dolog 1", description: "random dolog", tags:["random", "another random"]},
    {id: 2, name: "dolog 2", description: "random dolog 2", tags:["random"]},
    {id: 3, name: "dolog 3", description: "random dolog 3", tags:["random"]},
    {id: 4, name: "dolog 4", description: "random dolog 4", tags:["random"]},
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
