import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type Animal = {
  pronouns?: string;
  id: number;
  animal: string;
  breed: string;
  name: string;
  age: number;
  picture: string;
};

@Injectable({
  providedIn: 'root',
})
export class AnimalsService {
  ROOT_URL = 'https://storage.googleapis.com';
  animals: Animal[] = [];

  constructor(private http: HttpClient) {}

  fetchAnimals(): Observable<Animal[]> {
    return this.http.get<Animal[]>(
      `${this.ROOT_URL}/klinik-shared-media/evaluation-task/klinik-pets.json`
    );
  }
  getAnimals(): Observable<Animal[]> {
    return this.fetchAnimals().pipe(
      map((animals) =>
        animals.map((animal) => ({
          ...animal,
          pronouns: this.getRandomPronouns(),
        }))
      )
    );
  }
  findAnimal(id: number): Observable<Animal> | null {
    return this.getAnimals().pipe(
      map((animals) => animals.filter((animal) => animal.id === id)[0])
    );
  }
  getAnimalCount(): Observable<number> {
    return this.getAnimals().pipe(map((animals) => animals.length));
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
