import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-sentiment-analyser',
  templateUrl: './sentiment-analyser.component.html',
  styleUrls: ['./sentiment-analyser.component.css']
})
export class SentimentAnalyserComponent implements OnInit {
  private message: string;

  constructor(
    private http: Http
  ) {}

  handleInput(input: string): void{
    this.getMessage();
  }

  getMessage() {
    // this.http.get('https://api.icndb.com/jokes/random')
    // .map(res => res.json())
    // .subscribe(
    //   res => this.message = res.value.joke
    // );
  }

  ngOnInit(){
    this.message = '';
  }
}
