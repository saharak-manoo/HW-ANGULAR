import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RailsService {
  resources: string;

  constructor (private http: HttpClient) {}

  all() {
    return this.http.get('/' + this.resources);
  }
}
