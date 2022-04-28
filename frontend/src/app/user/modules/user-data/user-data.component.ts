import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {

  img = "https://ppm.express/wp-content/uploads/2022/03/5-1-2-1024x629.webp"
  constructor() { }

  ngOnInit(): void {
  }

}
