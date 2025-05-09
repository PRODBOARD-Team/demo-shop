import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

type InvoiceItem = {
  name: string;
  image: string;
  quantity: number;
  unit: number;
  total: number;
}

@Component({
  selector: 'invoice',
  imports: [
    CommonModule
  ],
  templateUrl: './invoice.component.html',
})
export class InvoiceComponent {
  @Input() items: InvoiceItem[]
}
