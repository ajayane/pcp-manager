import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-project-status',
  templateUrl: './project-status.component.html',
  styleUrls: ['./project-status.component.scss']
})
export class ProjectStatusComponent implements OnInit {

  cards = [];
  constructor() { }

  ngOnInit(): void {
    this.cards = [71, 78, 39, 66];
  }

}
