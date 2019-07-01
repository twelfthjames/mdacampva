import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { StylesCompileDependency } from '@angular/compiler';

@Component({
  selector: 'app-video',
  templateUrl: 'app-video.component.html',
  styleUrls: ['app-video.component.scss']
})

export class VideoComponent {
  @Input() assetsUrl: string;

  constructor(private sanitizer: DomSanitizer) {

  }

  getVideoBg() {
    const assetsUrl = '../../assets/img';
    const newPhoto = 'new.jpg';
    const background = `background-image: url(${assetsUrl} + ${newPhoto})`;

    return background;
  }
}
