import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailedListItemComponent } from './components/detailed-list-item/detailed-list-item.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { StatisticsNoteComponent } from './components/statistics-note/statistics-note.component';

const routes: Routes = [
  { path: '', component: StatisticsNoteComponent },
  {
    path: 'animals',
    component: ListViewComponent,
    children: [{ path: ':id', component: DetailedListItemComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
