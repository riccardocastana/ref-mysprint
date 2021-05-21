import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mys-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  sideNavOpened: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
