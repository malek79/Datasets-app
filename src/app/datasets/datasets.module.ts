import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatasetsRoutingModule } from './datasets-routing.module';
import { DatasetsListComponent } from './datasets-list/datasets-list.component';
import { DatasetsSearchComponent } from './datasets-search/datasets-search.component';
import { DatasetsDetailComponent } from './datasets-detail/datasets-detail.component';

@NgModule({
  imports: [
    CommonModule,
    DatasetsRoutingModule
  ],
  declarations: [DatasetsListComponent, DatasetsSearchComponent, DatasetsDetailComponent]
})
export class DatasetsModule { }
