import { Component, OnInit } from '@angular/core';
import { AnimalsService } from '../../services/animals.service';
import type { Animal } from '../../services/animals.service';

@Component({
  selector: 'app-statistics-note',
  templateUrl: './statistics-note.component.html',
  styleUrls: ['./statistics-note.component.css'],
})
export class StatisticsNoteComponent implements OnInit {
  animals: Animal[] = [];

  getDogCount(): number {
    return this.animals.filter((animal) => animal.animal === 'Dog').length;
  }
  getAverageAgeOfAnimals() {
    const sum = this.animals.reduce((acc, curr) => acc + curr.age, 0);
    return sum / this.animals.length;
  }
  getMostCommonBreed(): string {
    const breeds = this.animals.map((animal) => animal.breed);
    const breedCount = {} as { [key: string]: number };
    breeds.forEach((breed) => {
      if (breedCount[breed]) {
        breedCount[breed]++;
      } else {
        breedCount[breed] = 1;
      }
    });
    const largestBreedCount = Math.max(...Object.values(breedCount));
    const mostCommonBreed = Object.keys(breedCount).find(
      (breed) => breedCount[breed] === largestBreedCount
    );
    if (!mostCommonBreed) return 'no breed';
    return mostCommonBreed;
  }
  constructor(service: AnimalsService) {
    service.getAllAnimals().then((data) => {
      this.animals = data;
    });
  }

  ngOnInit(): void {}
}
