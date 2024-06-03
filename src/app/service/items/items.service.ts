import { Injectable } from '@angular/core';
import { Item } from '../../model/item/item';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  readonly items: Item[] = [
    new Item(1, 'Salamèche', 100, 'slameche.webp'),
    new Item(2, 'Rondoudou', 200, 'rdoudou.jpeg'),
    new Item(3, 'Pikachu', 300, 'fatkachu.png'),
    new Item(4, 'Ronflex', 400, 'rflex.webp'),
  ];
  constructor() {}
}
