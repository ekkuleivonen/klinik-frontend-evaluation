import { Component, OnInit } from '@angular/core';
import { AnimalsService } from '../../services/animals.service';
import type { Animal } from '../../services/animals.service';
// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-statistics-note',
  templateUrl: './statistics-note.component.html',
  styleUrls: ['./statistics-note.component.css'],
})
export class StatisticsNoteComponent implements OnInit {
  welcomeButtonText: string = 'Show me the animals!';
  animals!: Animal[];
  statistics: {} = {
    dogCount: null,
    averageAge: null,
    mostCommonBreed: null,
  };

  constructor(private animalsService: AnimalsService) {}

  ngOnInit(): void {
    this.animalsService.getAnimals().subscribe((animals) => {
      this.animals = animals;
      this.launchTypeWriter();
    });
  }
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
  launchTypeWriter() {
    const options = {
      loop: false,
      typeSpeed: 40,
      typeColor: '#fff',
      cursorColor: '#fff',
    };
    const targets = Array.from(
      document.querySelectorAll('.welcome-text-prompt')
    ) as HTMLElement[];
    const writers = targets.map((target) => new Typewriter(target, options));

    writers[0]
      .type(
        'This is the space for our employees to share their common love towards our furry friends.'
      )
      .rest(500)
      .then(writers[1].start.bind(writers[1]))
      .removeCursor()
      .start();

    writers[1]
      .type(
        `Did you know that we have a whopping ${this.getDogCount()} dogs within our team?`
      )
      .rest(500)
      .removeCursor()
      .then(writers[2].start.bind(writers[2]));

    writers[2]
      .type('Yup, we a real bunch of animal lovers over here! ')
      .rest(500)
      .type('We do our best to provide our pets with the best homes possible.')
      .rest(500)
      .removeCursor()
      .then(writers[3].start.bind(writers[3]));

    writers[3]
      .type(
        `In fact, we've done so well, that the average age of our animals is ${this.getAverageAgeOfAnimals()}. `
      )
      .rest(500)
      .type(`That's right, ${this.getAverageAgeOfAnimals()}! `)
      .rest(500)
      .type(`Do you think an animal would live up to that age in a poor home? `)
      .rest(500)
      .removeCursor()
      .then(writers[4].start.bind(writers[4]));

    writers[4]
      .type(`But as it seems, we do have our favourites. `)
      .rest(500)
      .type(
        `${this.getMostCommonBreed()}s have taken the spotlight, and are now the most popular breed in our shelter. `
      )
      .rest(500)
      .type(`Now, `)
      .rest(500)
      .type(`what does that say about us? `)
      .rest(1000)
      .removeCursor()
      .then(writers[5].start.bind(writers[5]));

    writers[5]
      .type('What are you waiting for? ')
      .rest(500)
      .type('Click the button below to discover our furry friends! ');
  }
}
