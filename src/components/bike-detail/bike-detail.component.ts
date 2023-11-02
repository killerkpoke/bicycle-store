import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bike } from 'src/types/Bike';

@Component({
  selector: 'app-bike-detail',
  templateUrl: './bike-detail.component.html',
  styleUrls: ['./bike-detail.component.css']
})
export class BikeDetailComponent implements OnInit {

  bike:Bike = {id: 1, name: 'kecske', description:'random', tags:['new', 'old', 'used', 'valami random']};
  images: Array<any> = [
    {id:1, src:'https://images.dog.ceo/breeds/setter-gordon/n02101006_3026.jpg'},
    {id:2, src:'https://images.dog.ceo/breeds/setter-gordon/n02101006_3026.jpg'},
    {id:3, src:'https://images.dog.ceo/breeds/setter-gordon/n02101006_3026.jpg'},

  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
