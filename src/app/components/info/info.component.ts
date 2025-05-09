import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'info',
  imports: [
    CommonModule
  ],
  templateUrl: './info.component.html',
})
export class InfoComponent {
  @Input() items: { title: string, desc: string }[]
}
