import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MarvelService {

  private baseUrl: string = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=2cabc66038042b03d84c5a3710ce639d&hash=7d8e8d1b68a4e8beb5a4fc579bc66b94";

  constructor(private http: Http) { }
  
    getHeroes(): Observable<any> {
      //added 50 character limit to base url
      return this.http.get(this.baseUrl + "&limit=50")
        .map(result => {
          return result.json()
        })
  
    }

    searchHeroes(heroSearchString): Observable<any> {
          //adding search string to base url which contains 'startswith'
          return this.http.get(this.baseUrl + heroSearchString)
            .map(result => {
              return result.json()
            })
      
        }
  }
