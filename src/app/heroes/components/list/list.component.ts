import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public herosName: string[] = ['spiderman','batman','ironman','hulk','thor'];
  public deletedHero?:string;

  deleteLastHero(){
    this.deletedHero = this.herosName.pop();
  }

}
