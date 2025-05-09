import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'switcher',
  imports: [
    CommonModule
  ],
  templateUrl: './switcher.component.html',
  styleUrl: './switcher.component.css'
})
export class SwitcherComponent {
   changeMode(mode:any, event:any) {
    switch (mode) {
        case 'mode':
            if (document.documentElement.className.includes("dark")) {
                document.documentElement.className = 'light'
            } else {
                document.documentElement.className = 'dark'
            }
            break;
    }
}
}
