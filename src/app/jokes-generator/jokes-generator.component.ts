import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';


@Component({
  selector: 'app-jokes-generator',
  templateUrl: './jokes-generator.component.html',
  styleUrls: ['./jokes-generator.component.css']
})
export class JokesGeneratorComponent implements OnInit {

  private message: string;

  constructor(
    private http: Http
  ) {}

  handleInput(): void{
    this.getMessage();
  }

  getMessage() {
    this.http.get('https://api.icndb.com/jokes/random')
    .map(res => res.json())
    .subscribe(
      res => this.message = res.value.joke
    );
  }

  ngOnInit(){
    this.message = '';
  }

}
