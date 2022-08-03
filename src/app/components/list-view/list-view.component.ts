import { Component, OnInit } from '@angular/core';
import { AnimalsService } from '../../services/animals.service';
import type { Animal } from '../../services/animals.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css'],
})
export class ListViewComponent implements OnInit {
  animals: Animal[] = [];

  constructor(service: AnimalsService) {
    service.getAllAnimals().then((data) => {
      this.animals = data;
    });
  }

  ngOnInit(): void {}
}
