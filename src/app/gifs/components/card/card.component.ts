import { Component, Input, OnInit } from '@angular/core';
import { GifsService } from '../../service/gifs.service';
import { Gif } from '../../interfaces/gifs.interefaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',

})
export class CardComponent  implements OnInit{


  @Input()
  public gif!: Gif;


  ngOnInit(): void {
    if ( !this.gif ) throw new Error ('Gif property is required')
  }

}
