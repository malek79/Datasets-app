import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {of} from 'rxjs/observable/of';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import {Dataset} from '../Dataset';
import {DatasetsService} from '../datasets.service';
@Component({
  selector: 'app-datasets-search',
  templateUrl: './datasets-search.component.html',
  styleUrls: ['./datasets-search.component.css'],
  providers: [DatasetsService]
})
export class DatasetsSearchComponent implements OnInit {
  ds$: Observable<Dataset[]>;
//  dsname$: Observable<Dataset[]>;
  private searchTerms = new Subject<string>();
//  private searchTermsname = new Subject<string>();
  constructor(private datasetsservice: DatasetsService) {}

//  searchname(term: string): void {
//    console.log(term);
//    this.searchTermsname.next(term);
//  }
searchkeyword(term: string): void {
    this.searchTerms.next(term);
    console.log(term);
  }
  ngOnInit() {
//    this.findbyname();
    this.findbykeyword();
  }
  findbykeyword(): void {
    this.ds$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.datasetsservice.searchAllFieldsDatasets(term)),
    );
  }


//  findbyname(): void {
//    this.dsname$ = this.searchTermsname.pipe(
//      // wait 300ms after each keystroke before considering the term
//      debounceTime(300),
//
//      // ignore new term if same as previous term
//      distinctUntilChanged(),
//
//      // switch to new search observable each time the term changes
//      switchMap((term: string) => this.datasetsservice.searchDatasets(term)),
//    );
//  }

}
