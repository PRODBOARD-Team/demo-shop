import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { CarouselModule } from "ngx-owl-carousel-o";

type ItemDetails = {
  name: string;
  description: string;
  images: string[];
  tag: string;
  props: { name: string, value: string }[];

}

@Component({
  selector: 'item-details',
  imports: [
    CommonModule,
    CarouselModule
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class DetailsComponent {

  customOptions = {
    loop: true,
    margin: 10,
    nav: false,
    items: 1,
    dots: true
  }

  @Input() item: ItemDetails;
  @ViewChild("container") container?: ElementRef<HTMLElement>;

  ngAfterViewInit() {
    for (let index = 0; index < this.item.images.length; index++) {
      const image = this.item.images[index];
      this.container.nativeElement.style.setProperty("--image-" + index, "url('" + image + "')");
    }

  }
}

