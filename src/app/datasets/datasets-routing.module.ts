import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatasetsListComponent } from './datasets-list/datasets-list.component';
import {DatasetsSearchComponent} from './datasets-search/datasets-search.component';
import {DatasetsDetailComponent} from './datasets-detail/datasets-detail.component';
const routes: Routes = [
{path: 'datasets', component: DatasetsListComponent},
{ path: 'find/:key', component: DatasetsSearchComponent },
{ path: 'detail/:id', component: DatasetsDetailComponent },
{ path: 'search', component: DatasetsSearchComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatasetsRoutingModule { }
