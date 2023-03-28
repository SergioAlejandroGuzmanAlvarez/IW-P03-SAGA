import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students : Student[];
  constructor() { 
    this.students = [
      {
        controlNumber: "18401126",
        age: 38,
        carrer: "ISC",
        curp: "GUAS000304HNTLZRA6",
        email: "sealguzmanal@ittepic.edu.mx",
        name: "Guzman Alvarez Sergio Alejandro",
        nip: 1409
      }
    ];
  }
}
