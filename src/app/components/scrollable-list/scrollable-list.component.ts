import { Component, OnInit, Input } from '@angular/core';
import type { Animal } from '../../services/animals.service';

@Component({
  selector: 'app-scrollable-list',
  templateUrl: './scrollable-list.component.html',
  styleUrls: ['./scrollable-list.component.css'],
})
export class ScrollableListComponent implements OnInit {
  @Input() animals?: Animal[];

  ngOnInit(): void {}
}
