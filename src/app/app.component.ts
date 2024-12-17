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
  particles: number = 35;

  onParticleChange(event: Event) {
    this.particles = +(event.target as HTMLInputElement).value;
  }
}
