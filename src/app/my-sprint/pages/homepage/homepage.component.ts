import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'node_modules/rxjs/operators'

@Component({
  selector: 'mys-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.test()
  }

  httpOptions = {

    withCredentials: true,
  }

  test() {
    this.httpClient.get("http://localhost:8000/api/public/atenei", this.httpOptions).subscribe();
  }

}
