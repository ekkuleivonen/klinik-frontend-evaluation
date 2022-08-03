import { Injectable } from '@angular/core';

export type Animal = {
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
    const response = await fetch(ALL_ANIMALS_ENDPOINT_URL);
    const data = await response.json();
    this.animals = data;
    return this.animals;
  }
}
