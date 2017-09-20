import { Component, OnInit } from '@angular/core';
import { MarvelService } from './marvel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  heroInfo;
  heroSearchString;
  

  constructor(private marvelService: MarvelService){}
  
 
  getDataFromService(){
    this.marvelService.getHeroes()
    .subscribe(
      heroInfo => {
        this.heroInfo = heroInfo.data.results;
      }
    )
  }

  getDataFromSearch(searchValue){
    //if statement to check if search if blank or not. if blank, do regular get to pull first 50
    if (searchValue != "") {
      var heroSearchString = "&nameStartsWith=" + searchValue;
      this.marvelService.searchHeroes(heroSearchString)
      .subscribe(
        heroInfo => {
          this.heroInfo = heroInfo.data.results;
        }
      )
    } else {
      this.marvelService.getHeroes()
      .subscribe(
        heroInfo => {
          this.heroInfo = heroInfo.data.results;
        }
      )
    }
    
  }




 ngOnInit(){
   this.getDataFromService()
 }
}
