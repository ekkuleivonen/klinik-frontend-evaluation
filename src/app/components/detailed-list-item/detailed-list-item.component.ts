import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import type { Animal } from '../../services/animals.service';
import { AnimalsService } from '../../services/animals.service';

@Component({
  selector: 'app-detailed-list-item',
  templateUrl: './detailed-list-item.component.html',
  styleUrls: ['./detailed-list-item.component.css'],
})
export class DetailedListItemComponent implements OnInit {
  public id?: string | null;
  public animal: Animal | null = null;
  public animalCount: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private animalService: AnimalsService
  ) {}

  fetchAnimal(id: string | null): void {
    if (!id) return;
    this.animalService.getAllAnimals().then((data) => {
      const foundAnimal = data.find((animal) => animal.id === parseInt(id));
      if (!foundAnimal) return;
      this.animal = foundAnimal;
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(async (paramsId) => {
      this.id = paramsId['id'] as string | null;
      this.fetchAnimal(this.id);
      this.animalCount = await this.animalService.getAnimalCount();
    });
  }
}
