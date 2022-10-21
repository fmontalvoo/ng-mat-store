import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  search = new FormControl();
  results: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.search.valueChanges
      .pipe(
        map(query => query.toLowerCase()),
        debounceTime(700)
      )
      .subscribe(query => {
        this.getData(query);
      });
  }

  private getData(query: string) {
    const apiKey = 'fRqE7Z6ywo5g4G7H6cM7nhFsyAka2hJw';
    this.http.get(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&limit=7`)
      .pipe(
        map((response: any) => response.data.map((item: any) => item.images.downsized))
      )
      .subscribe((result) => {
        console.log('data', result);
        this.results = result;
      })
  }

}
