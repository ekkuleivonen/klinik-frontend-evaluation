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
  topGradient: HTMLDivElement | null = null;
  bottomGradient: HTMLDivElement | null = null;

  constructor(private animalsService: AnimalsService) {}
  ngOnInit(): void {
    this.animalsService.getAnimals().subscribe((animals) => {
      this.animals = animals;
    });
    this.topGradient = document.querySelector('.top-gradient');
    this.bottomGradient = document.querySelector('.bottom-gradient');
    document.addEventListener('mousemove', this.handleMouseMove);
  }
  handleMouseMove = (event: MouseEvent) => {
    if (!this.topGradient || !this.bottomGradient) return;
    const mouseY = event.clientY;
    const mouseX = event.clientX;
    if (mouseX > window.innerWidth / 2.15) return;
    this.topGradient.style.height = `${mouseY - 200}px`;
    this.bottomGradient.style.height = `${window.innerHeight - mouseY - 200}px`;
  };
}
