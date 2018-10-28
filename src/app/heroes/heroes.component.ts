import {Component, OnInit} from '@angular/core';

import {Hero} from '../hero';
// import { HEROES } from '../mock-heroes';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes', // 组件选择器
  templateUrl: './heroes.component.html', // 组件模板
  styleUrls: ['./heroes.component.css'] // 组件私有样式
})
export class HeroesComponent implements OnInit {

  // hero: Hero = {id: 1, name: "Windstorm" };
  // selectedHero: Hero;

  // heroes: Hero[] = HEROES;
  heroes: Hero[];

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  // onSelect(hero: Hero) {
  //   this.selectedHero = hero;
  // }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(
      heroes => this.heroes = heroes
    );
  }

}
