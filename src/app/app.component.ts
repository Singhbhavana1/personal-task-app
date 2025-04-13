import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Time Stack';
  ngAfterViewInit(): void {
    this.initStars();
  }

  @HostListener('window:resize')
  onResize() {
    this.resizeCanvas();
    this.createStars();
  }

  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private stars: any[] = [];
  private STAR_COUNT = 100;

  private initStars(): void {
    this.canvas = document.getElementById('starCanvas') as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d')!;
    this.resizeCanvas();
    this.createStars();
    this.animateStars();
  }

  private resizeCanvas(): void {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  private createStars(): void {
    this.stars = [];
    for (let i = 0; i < this.STAR_COUNT; i++) {
      this.stars.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.8 + 0.2,
      });
    }
  }

  private animateStars(): void {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (const star of this.stars) {
      this.ctx.beginPath();
      this.ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
      this.ctx.fill();

      star.x += star.speedX;
      star.y += star.speedY;

      if (star.x < 0 || star.x > this.canvas.width) star.speedX *= -1;
      if (star.y < 0 || star.y > this.canvas.height) star.speedY *= -1;
    }

    requestAnimationFrame(() => this.animateStars());
  }
}
