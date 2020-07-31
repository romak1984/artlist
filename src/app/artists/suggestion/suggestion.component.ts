import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.scss']
})
export class SuggestionComponent implements OnInit {

  constructor() { }

  @Input() title: string;
  @Input() subTitle: string;

  ngOnInit() {
    console.log(this.subTitle);
  }

}
