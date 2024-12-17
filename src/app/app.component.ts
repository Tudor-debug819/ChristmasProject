import { Component } from '@angular/core';
import { SnowflakesComponent } from "./snowflakes/snowflakes.component";

@Component({
  selector: 'app-root',
  imports: [SnowflakesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ChristmasProject';
}
