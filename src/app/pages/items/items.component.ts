import { Component } from '@angular/core';
import { Item } from '../../model/item/item';
import { RouterLink } from '@angular/router';
import { ItemComponent } from '../../components/item/item.component';
import { ItemsService } from '../../service/items/items.service';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [RouterLink, ItemComponent],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss',
})
export class ItemsComponent {
  public items: Item[] = [];

  constructor(private itemsService: ItemsService) {}

  ngOnInit() {
    this.items = this.itemsService.items;
  }
}
