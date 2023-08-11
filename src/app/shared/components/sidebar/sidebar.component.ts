import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from 'src/app/gifs/service/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  // @ViewChild('buttonTag')
  // public buttonTag!: ElementRef<HTMLButtonElement>

  constructor(private gifsService: GifsService){}

  get tags(){

    return this.gifsService.tagsHistory
  }

  searchTag(tag1:string) {
    //const tag = this.buttonTag.nativeElement.textContent;
    console.log(tag1)
    //const tagString = tag!.toString()

    this.gifsService.searchTag(tag1)



  }

}
