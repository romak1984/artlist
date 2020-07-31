import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  @Input() img: string;
  @Input() category: string;
  @Input() name: string;
  @Input() prof: string;

  constructor() { }

  ngOnInit() {
    console.log(this.img);
  }

}
