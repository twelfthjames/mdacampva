import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  constructor() { }

  photos = [
    'https://mdacampva-photos.twelfthjames.com/2019/IMG_1790.jpg',
    'https://mdacampva-photos.twelfthjames.com/2019/IMG_1733.jpg',
    'https://mdacampva-photos.twelfthjames.com/2019/IMG_1717.jpg',
    'https://mdacampva-photos.twelfthjames.com/2019/IMG_1719.jpg',
    'https://mdacampva-photos.twelfthjames.com/2019/IMG_1700.jpg',
    'https://mdacampva-photos.twelfthjames.com/2019/IMG_1517.jpg'
  ];

  ngOnInit() {
  }

}
