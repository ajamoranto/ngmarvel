import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() searchString = new EventEmitter<any>();

  searchMarvel;
  searchValue;

  constructor() { }

  ngOnInit() {
  }

  searchHero(){
    this.searchValue = this.searchMarvel
    this.searchString.emit(this.searchValue);
    this.searchMarvel = "";
  }

}
