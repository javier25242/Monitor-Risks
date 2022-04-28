import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-graphics',
  templateUrl: './user-graphics.component.html',
  styleUrls: ['./user-graphics.component.scss']
})
export class UserGraphicsComponent implements OnInit {

  img = "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2014/04/37137-datos-grafico.jpg?itok=IncNlJQM"

  constructor() { }

  ngOnInit(): void {
  }

}
