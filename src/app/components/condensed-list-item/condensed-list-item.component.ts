import { Component, OnInit, Input } from '@angular/core';
import type { Animal } from '../../services/animals.service';

@Component({
  selector: 'app-condensed-list-item',
  templateUrl: './condensed-list-item.component.html',
  styleUrls: ['./condensed-list-item.component.css'],
})
export class CondensedListItemComponent implements OnInit {
  animalData = {
    name: 'anonymous',
    picture: 'https://bit.ly/3QfGXzd',
    slug: '',
  };

  @Input() animal?: Animal;

  constructor() {}

  ngOnInit(): void {
    if (this.animal?.name) this.animalData.name = this.animal.name;
    if (this.animal?.name) this.animalData.picture = this.animal.picture;
    if (this.animal?.id) this.animalData.slug = `/animals/${this.animal.id}`;
  }
}
