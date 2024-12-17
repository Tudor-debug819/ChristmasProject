import { Component, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-snowflakes',
  imports: [],
  templateUrl: './snowflakes.component.html',
  styleUrl: './snowflakes.component.css'
})
export class SnowflakesComponent {
  emoji = '❄';
  particles = 300;
  innerWidth = window.innerWidth;

  constructor(private renderer: Renderer2, public el: ElementRef) { }

  ngOnInit():void{
    this.createParticles();
  }

  createParticles() {
    for (let i = 0; i < this.particles; i++) {
      let emojiLeftPosition = Math.random() * this.innerWidth; // Randomize left position
      let span = this.renderer.createElement('span');
      let text = this.renderer.createText(this.emoji);
      this.renderer.appendChild(span, text);
      this.renderer.addClass(span, 'snowflake');
  
      // Randomize position, duration, and delay
      this.renderer.setStyle(span, 'left', emojiLeftPosition + 'px');
      this.renderer.setStyle(span, 'animation-duration', this.randomMinMax(5, 10) + 's');
      this.renderer.setStyle(span, 'animation-delay', this.randomMinMax(0, 10) + 's');
  
      this.renderer.appendChild(this.el.nativeElement, span);
    }
  }

  randomMinMax(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

}
