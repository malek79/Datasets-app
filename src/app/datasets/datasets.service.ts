import {Injectable} from '@angular/core';
import {Dataset} from './Dataset';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DatasetsService {

  private apiUrl = 'http://localhost:8090/';
    private findUrl = 'http://localhost:8090/find?key=';
  private searchUrl = 'http://localhost:8090/search?key=';
  private detailUrl = 'http://localhost:8090/detail?id=';
  constructor(private http: HttpClient) {}

  findAll(): Observable<Dataset[]> {
    return this.http.get<Dataset[]>(this.apiUrl)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
/** GET hero by id. Will 404 if id not found */
getDataset(id: string): Observable<Dataset> {
  const url = `${this.detailUrl}${id}`;
  return this.http.get<Dataset>(url)
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
}
searchDatasets(term: string): Observable<Dataset[]> {
  const url = `${this.findUrl}${term}`;
  console.log(url);
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Dataset[]>(url)
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
}

  searchAllFieldsDatasets(term: string): Observable<Dataset[]> {
  const url = `${this.searchUrl}${term}`;
  console.log(url);
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Dataset[]>(url)
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
}

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
