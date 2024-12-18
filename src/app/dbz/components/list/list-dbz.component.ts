import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl:'./list-dbz.component.html',
  styleUrls:['./list-dbz.component.css']
})
export class ListDBZComponent { 

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 300
  }]

  @Output()
  onDelete: EventEmitter<string> = new EventEmitter<string>();

  onDeleteCharacter(id?: string): void{
    if (!id) return;

    this.onDelete.emit(id);

  }
}
