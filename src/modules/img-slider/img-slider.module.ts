import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgSliderComponent } from './img-slider.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ImgSliderComponent],
  exports: [ImgSliderComponent]
})
export class ImgSliderModule { }
