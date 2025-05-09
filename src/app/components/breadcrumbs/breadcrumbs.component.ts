import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';


interface NavItem {
  path: string;
  name: string;
}


@Component({
  selector: 'breadcrumbs',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './breadcrumbs.component.html'
})
export class BreadcrumbsComponent {
  @Input() data: NavItem[];


  get last() { return this.data[this.data.length - 1] }

  pathFor(item: NavItem) {
    const index = this.data.indexOf(item)+1;
    const result = ["/"];
    for (let i = 0; i < index; i++) {
      result.push(this.data[i].path);
    }
    return result;
  }
}
