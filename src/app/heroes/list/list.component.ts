import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Ironman', 'Hulk', 'Dr Strange', 'Malphite Verde', 'Thor'];
  public deletedHero?: string;


  removeLastHero():void{
   this.deletedHero =  this.heroNames.pop();
  }



}
