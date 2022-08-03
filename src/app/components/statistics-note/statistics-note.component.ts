import { Component, OnInit, AfterContentInit } from '@angular/core';
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
      this.launchTypeWriter();
    });
  }
  launchTypeWriter() {
    const target = document.querySelector('#tw');
    const options = {
      loop: false,
      typeSpeed: 70,
    };
    const writer1 = new Typewriter(target, options);
    writer1
      .type(
        `Welcome to Klinik's animal shelter. -The space for our employees to share their common love towards our furry friends. `
      )
      .rest(500)
      .type(
        `Did you know that we have a whopping ${this.getDogCount()} dogs within our team? `
      )
      .rest(300)
      .type(`Yup, we a real bunch of animal lovers over here! `)
      .rest(300)
      .type(`We do our best to provide our pets with the best homes possible. `)
      .rest(300)
      .type(
        `In fact, we've done so well, that the average age of our animals is ${this.getAverageAgeOfAnimals()}. That's right, ${this.getAverageAgeOfAnimals()}! Do you think an animal would live up to that age in a poor home? `
      )
      .rest(300)
      .type(
        `We do our best to maintain a level playing field for our furry friends. `
      )
      .rest(300)
      .type(`But as it seems, we do have our favourites. `)
      .rest(300)
      .type(
        `${this.getMostCommonBreed()}s have taken the spotlight, and are now the most popular breed in our shelter. `
      )
      .rest(300)
      .type(`Now, what does that say about us? `)
      .rest(500)
      .type(
        `OK. That's enough. You came here to peek at some cute furry photos, didn't you? `
      )
      .rest(1000)
      .type(`What are you waiting for? Click the button below!`)
      .start();
  }

  ngOnInit(): void {}
}
