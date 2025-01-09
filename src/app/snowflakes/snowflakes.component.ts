import { Component, Renderer2, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-snowflakes',
  templateUrl: './snowflakes.component.html',
  styleUrls: ['./snowflakes.component.css']
})
export class SnowflakesComponent {
  emoji = '❄';
  @Input() particles: number = 35; // Default number of particles
  innerWidth = window.innerWidth;

  isMusicPlaying: boolean = false; // Start with music stopped

  // Access the audio element using ViewChild
  @ViewChild('backgroundMusic', { static: true }) backgroundMusic!: ElementRef<HTMLAudioElement>;


  constructor(private renderer: Renderer2, public el: ElementRef) { }

  ngOnInit(): void {
    this.createParticles();
  }

  onParticleChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.particles = +inputElement.value; // Update particles with the slider value
    console.log('Updated particles:', this.particles);
    this.clearParticles();
    this.createParticles();
  }
  createParticles() {
    for (let i = 0; i < this.particles; i++) {
      let emojiLeftPosition = Math.random() * this.innerWidth; // Random position
      let span = this.renderer.createElement('span');
      let text = this.renderer.createText(this.emoji);
      this.renderer.appendChild(span, text);
      this.renderer.addClass(span, 'snowflake');

      this.renderer.setStyle(span, 'left', emojiLeftPosition + 'px');
      this.renderer.setStyle(span, 'animation-duration', this.randomMinMax(5, 15) + 's');
      this.renderer.setStyle(span, 'animation-delay', this.randomMinMax(0, 10) + 's');

      this.renderer.appendChild(this.el.nativeElement, span);
    }
  }

  clearParticles() {
    const elements = this.el.nativeElement.querySelectorAll('.snowflake');
    elements.forEach((element: HTMLElement) => element.remove());
  }

  randomMinMax(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  toggleMusic() {
    const audioElement = this.backgroundMusic.nativeElement;
    if (this.isMusicPlaying) {
      audioElement.pause(); // Pause the audio
    } else {
      audioElement.play(); // Play the audio
    }
    this.isMusicPlaying = !this.isMusicPlaying; // Toggle the state
  }

}
