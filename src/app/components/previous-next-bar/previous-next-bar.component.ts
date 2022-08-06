import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-previous-next-bar',
  templateUrl: './previous-next-bar.component.html',
  styleUrls: ['./previous-next-bar.component.css'],
})
export class PreviousNextBarComponent implements OnInit {
  public id?: number | null;
  @Input() animalCount$!: Observable<number>;
  queryParams: any = { id: null };

  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.route.params.subscribe((paramsId) => {
      this.id = parseInt(paramsId['id']) as number | null;
    });
  }

  previousAnimal() {
    if (!this.id || this.id <= 1) return;
    this.id--;
    this.router.navigate(['/animals', this.id]);
  }
  nextAnimal() {
    this.animalCount$.subscribe((count) => {
      if (!this.id || this.id >= count) return;
      this.id++;
      this.router.navigate(['/animals', this.id]);
    });
  }
}
