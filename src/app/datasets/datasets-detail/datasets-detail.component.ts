import { Component, OnInit, Input } from '@angular/core';
import {Dataset} from '../Dataset';
import {DatasetsService} from '../datasets.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-datasets-detail',
  templateUrl: './datasets-detail.component.html',
  styleUrls: ['./datasets-detail.component.css'],
  providers: [DatasetsService]
})
export class DatasetsDetailComponent implements OnInit {

  @Input() dataset: Dataset;
  constructor(
  private route: ActivatedRoute,
  private datasetservice: DatasetsService,
  private location: Location
) { }

  ngOnInit() {
    this.getDataset();
  }
  getDataset(): void {
  const id = this.route.snapshot.paramMap.get('id');
    console.log(this.route);
  this.datasetservice.getDataset(id)
    .subscribe(dataset => this.dataset = dataset);
}
  goBack(): void {
  this.location.back();
}

}
