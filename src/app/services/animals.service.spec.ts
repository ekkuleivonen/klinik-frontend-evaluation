import { TestBed } from '@angular/core/testing';
import { AnimalsService } from './animals.service';
import type { Animal } from './animals.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('AnimalsService', () => {
  let service: AnimalsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AnimalsService],
    });
    service = TestBed.get(AnimalsService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve animals from the API via GET', () => {
    const dummyAnimals: Animal[] = [
      {
        id: 1,
        animal: 'Dog',
        breed: 'American Akita',
        name: 'Mia',
        age: 5,
        picture:
          'https://storage.googleapis.com/klinik-shared-media/evaluation-task/mia.jpg',
      },
      {
        id: 2,
        animal: 'Dog',
        breed: 'Coton De Tulear',
        name: 'Kaapo',
        age: 6,
        picture:
          'https://storage.googleapis.com/klinik-shared-media/evaluation-task/kaapo.jpg',
      },
      {
        id: 3,
        animal: 'Dog',
        breed: 'Shiba',
        name: 'Totoro',
        age: 2,
        picture:
          'https://storage.googleapis.com/klinik-shared-media/evaluation-task/totoro.jpeg',
      },
    ];
    service.fetchAnimals().subscribe((animals: Animal[]) => {
      expect(animals).toEqual(dummyAnimals);
    });
    const req = httpMock.expectOne(
      `${service.ROOT_URL}/klinik-shared-media/evaluation-task/klinik-pets.json`
    );
    expect(req.request.method).toEqual('GET');

    req.flush(dummyAnimals);
  });
});
