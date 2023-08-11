import { Component,Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interefaces';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',

})
export class CardListComponent {

  @Input()
  public gifs: Gif[] = [];

}
