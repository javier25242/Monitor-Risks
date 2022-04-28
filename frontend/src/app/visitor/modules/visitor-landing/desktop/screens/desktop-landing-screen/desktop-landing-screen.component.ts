import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'visitor-desktop-landing-screen',
  templateUrl: './desktop-landing-screen.component.html',
  styleUrls: ['./desktop-landing-screen.component.scss']
})
export class DesktopLandingScreenComponent implements OnInit {

  img = "https://thumbs.dreamstime.com/b/jefe-de-proyecto-trabajar-con-gantt-chart-planning-seguimiento-hitos-y-entregables-actualizaci%C3%B3n-tareas-programaci%C3%B3n-progreso-212388424.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
