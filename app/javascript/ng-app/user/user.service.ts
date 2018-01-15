import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Injectable()
export class UserService {
  constructor (private http: HttpClient) {}

  getCurrentUser() {
    return this.http.get('/home/profile');
  }
}
