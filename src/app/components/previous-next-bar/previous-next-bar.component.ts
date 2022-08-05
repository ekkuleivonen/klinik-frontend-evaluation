import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-previous-next-bar',
  templateUrl: './previous-next-bar.component.html',
  styleUrls: ['./previous-next-bar.component.css'],
})
export class PreviousNextBarComponent implements OnInit {
  public id?: number | null;
  @Input() public animalCount: number | null = null;
  queryParams: any = { id: null };

  previousAnimal() {
    if (!this.id || this.id <= 1) return;
    this.id--;
    this.router.navigate(['/animals', this.id]);
  }

  nextAnimal() {
    if (!this.animalCount || !this.id) return;
    if (!this.id || this.id >= this.animalCount) return;
    this.id++;
    this.router.navigate(['/animals', this.id]);
  }

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((paramsId) => {
      this.id = parseInt(paramsId['id']) as number | null;
    });
  }
}
