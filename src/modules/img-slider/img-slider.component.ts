import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Slider } from 'src/types/Slider';

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.css'],
})
export class ImgSliderComponent implements OnInit, OnDestroy {

  @Input() slides: Slider[] = [];
  @Input() timer: number = 3000;

  currentIndex: number = 0;
  timeoutId?: number;

  constructor() {}

  ngOnDestroy() {
    window.clearTimeout(this.timeoutId);
  }

  ngOnInit() {
    this.resetTimer(this.timer);
  }

  resetTimer(timer:number) {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
    }
    this.timeoutId = window.setTimeout(() => this.goToNext(), timer);
  }

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide
      ? this.slides.length - 1
      : this.currentIndex - 1;

    this.resetTimer(this.timer);
    this.currentIndex = newIndex;
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

    this.resetTimer(this.timer);
    this.currentIndex = newIndex;
  }

  goToSlide(slideIndex: number): void {
    this.resetTimer(this.timer);
    this.currentIndex = slideIndex;
  }

  getCurrentSlideUrl() {
    return this.slides[this.currentIndex].src;
  }
}
