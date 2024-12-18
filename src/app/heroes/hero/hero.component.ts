import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizeName():string{
    return this.name.toUpperCase();
  }

  heroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeName():void {
    this.name='Wolverine';
  }

  changeAge():void{
    this.age = 65;
  }

  resetForm():void{
    //this.name = 'ironman';
    this.age = 45;

    document.querySelectorAll('h1')!.forEach(element =>{
      element.innerHTML='<h1>Desde Angular</h1>';
    })

  }
}
