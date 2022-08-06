import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import type { Animal } from '../../services/animals.service';
import { AnimalsService } from '../../services/animals.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detailed-list-item',
  templateUrl: './detailed-list-item.component.html',
  styleUrls: ['./detailed-list-item.component.css'],
})
export class DetailedListItemComponent implements OnInit {
  id!: string;
  animal$!: Observable<Animal> | null;
  animalCount$!: Observable<number>;

  constructor(
    private route: ActivatedRoute,
    private animalService: AnimalsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((paramsId) => {
      this.id = paramsId['id'] as string;
      this.animal$ = this.animalService.findAnimal(+this.id);
      this.animalCount$ = this.animalService.getAnimalCount();
    });
  }
}
