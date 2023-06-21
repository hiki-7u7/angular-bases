import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'spiderman';
  public age: number = 24;

  get capitalizedName():string {
    return this.name.toLocaleUpperCase();
  };

  getHeroDescription():string {
    return `${this.name} - ${this.age}`
  };

  changeHero():void {
    this.name = 'batman'
  };

  changeAge():void {
    this.age = 34
  }

  resetForm():void {
    this.name = 'spiderman';
    this.age = 24
  }

}
