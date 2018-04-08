import {Component, OnInit} from '@angular/core';
import {Dataset} from '../Dataset';
import {DatasetsService} from '../datasets.service';
@Component({
  selector: 'app-datasets-list',
  templateUrl: './datasets-list.component.html',
  styleUrls: ['./datasets-list.component.css'],
  providers: [DatasetsService]
})
export class DatasetsListComponent implements OnInit {

  ds: Dataset[];
  ind: string;
  constructor(private datasetsService: DatasetsService) {}

  ngOnInit() {
    this.getAllDatasets();
  }

  getAllDatasets() {
    this.datasetsService.findAll().subscribe(
      ds => {
        this.ds = ds;
      },
      err => {
        console.log(err);
      }

    );
  }

}
