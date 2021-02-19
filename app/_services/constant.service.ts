import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

 apiUrl = 'http://localhost/2021/delta/api/index.php/api/' ;
  constructor() { }
}
