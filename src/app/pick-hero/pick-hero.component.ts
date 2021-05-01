import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-pick-hero',
  templateUrl: './pick-hero.component.html',
  styleUrls: ['./pick-hero.component.css']
})
export class PickHeroComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };


  constructor() { }

  ngOnInit(): void {
  }

}
