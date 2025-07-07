import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceEgService {

  constructor() { }
  hellofromservice()
  {
    return "THIS IS INSIDE A SERVICE";
  }
}
