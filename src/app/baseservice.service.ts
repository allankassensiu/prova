import { Injectable } from '@angular/core';
import { BaseMine } from './camp-definition/baseMine';


@Injectable({
  providedIn: 'root'
})
export class BaseserviceService {
  
  constructor() { }
 
  baseGrid() {
    let grid = new BaseMine(5, 5);
    return grid;
 }
}
