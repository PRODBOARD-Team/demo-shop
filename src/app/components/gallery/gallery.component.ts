import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

type GalleryItem = {
  id: string;
  name: string;
  images: string[];
  tag: string;

}

@Component({
  selector: 'gallery',
  imports: [
    CommonModule,
    RouterLink,
  ],
  templateUrl: './gallery.component.html'
})
export class GalleryComponent {

  @Input() items: GalleryItem[];
  @Input() navigateTo: string[];


}

