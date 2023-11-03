import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bike } from 'src/types/Bike';
import { Slider } from 'src/types/Slider';

@Component({
  selector: 'app-bike-detail',
  templateUrl: './bike-detail.component.html',
  styleUrls: ['./bike-detail.component.css']
})
export class BikeDetailComponent implements OnInit {

  bike:Bike = {id: 1, name: 'kecske', description:'random', tags:['new', 'old', 'used', 'valami random']};
  images: Array<Slider> = [
    {id:1, src:'https://images.dog.ceo/breeds/setter-gordon/n02101006_3026.jpg', title: 'cycle_1'},
    {id:2, src:'https://images.dog.ceo/breeds/pug/weiner.jpg', title: 'cycle_2'},
    {id:3, src:'https://images.dog.ceo/breeds/havanese/00100trPORTRAIT_00100_BURST20191126134713895_COVER.jpg',title: 'cycle_3'},

  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
