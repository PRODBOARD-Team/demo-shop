import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'planner',
  imports: [
    CommonModule,
  ],
  templateUrl: './planner.component.html'
})
export class PlannerComponent {

  @Input() settings: {
    company?: string,
    instance?: string,
    start?: { guid: string, clone?: boolean }
  }
  @ViewChild("planner") planner?: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {

    const prodboard = (window as any)['prodboard'];
    const settings = {
      company: "presentation",
      instance: "demo",
      host: window.location.href,
      environment: "https://prodboard-v2-constructor-staging.azurewebsites.net",
    }
    prodboard(this.planner?.nativeElement, { ...settings, ...this.settings });
  }


}




