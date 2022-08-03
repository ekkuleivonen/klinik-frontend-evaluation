import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CondensedListItemComponent } from './components/condensed-list-item/condensed-list-item.component';
import { DetailedListItemComponent } from './components/detailed-list-item/detailed-list-item.component';
import { ScrollableListComponent } from './components/scrollable-list/scrollable-list.component';
import { StatisticsNoteComponent } from './components/statistics-note/statistics-note.component';
import { PreviousNextBarComponent } from './components/previous-next-bar/previous-next-bar.component';
import { AnimalsService } from './services/animals.service';
import { ListViewComponent } from './components/list-view/list-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CondensedListItemComponent,
    DetailedListItemComponent,
    ScrollableListComponent,
    StatisticsNoteComponent,
    PreviousNextBarComponent,
    ListViewComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [AnimalsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
