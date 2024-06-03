import { Component, Input } from '@angular/core';
import { Item } from '../../model/item/item';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
})
export class ItemComponent {
  @Input() public item!: Item;
}
