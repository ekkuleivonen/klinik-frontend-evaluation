import { Injectable } from '@angular/core';

export type Animal = {
  pronouns?: string;
  id: number;
  animal: string;
  breed: string;
  name: string;
  age: number;
  picture: string;
};

const ALL_ANIMALS_ENDPOINT_URL =
  'https://storage.googleapis.com/klinik-shared-media/evaluation-task/klinik-pets.json';

@Injectable({
  providedIn: 'root',
})
export class AnimalsService {
  animals: Animal[] = [];

  async getAllAnimals(): Promise<Animal[]> {
    if (this.animals.length > 0) {
      return this.animals;
    }
    const response = await fetch(ALL_ANIMALS_ENDPOINT_URL);
    const data = await response.json();
    this.animals = data;
    this.animals.forEach((animal) => {
      animal.pronouns = this.getRandomPronouns();
    });
    return this.animals;
  }

  async getAnimalCount(): Promise<number> {
    if (this.animals.length === 0) {
      await this.getAllAnimals();
    }
    return this.animals.length;
  }

  getRandomPronouns(): string {
    const random = Math.floor(Math.random() * 3);
    switch (random) {
      case 0:
        return 'he, him, his';
      case 1:
        return 'she, her, hers';
      case 2:
        return 'they, them, theirs';
      default:
        return 'they, them, theirs';
    }
  }
}
