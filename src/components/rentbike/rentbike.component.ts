import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rentbike',
  templateUrl: './rentbike.component.html',
  styleUrls: ['./rentbike.component.css']
})
export class RentbikeComponent implements OnInit {

  cards:Array<any> = [
    {id: 1, name: "rented bike 1", description: "random dolog", tags:["new", "BMX"]},
    {id: 2, name: "rented bike 2", description: "random dolog 2", tags:["new"]},
    {id: 3, name: "rented bike 3", description: "random dolog 3", tags:["used"]},
    {id: 4, name: "rented bike 4", description: "random dolog 4", tags:["used"]},
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
