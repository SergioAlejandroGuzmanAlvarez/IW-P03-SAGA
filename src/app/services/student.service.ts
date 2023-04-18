import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { Observable, of } from 'rxjs';
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
        career: "ISC",
        curp: "GUAS000304HNTLZRA6",
        email: "sealguzmanal@ittepic.edu.mx",
        name: "Guzman Alvarez Sergio Alejandro",
        nip: 1409,
        photo:"https://picsum.photos/600?random=1"
      }
    ];
  }
  public getStudents(): Student[]{
    return this.students;
  }
  public getStudentByControlNumber(cn: string): Observable<Student>{
    let student: Student = {
      controlNumber: '',
      name: '',
      curp: '',
      age: 0,
      nip: 0,
      email: '',
      career: '',
      photo: ''
    };
    this.students.forEach(element =>{
      if(element.controlNumber === cn)
      student = element;
    });
    return of(student);
  }
  public newStudent(student : Student): Student[]{
    this.students.push(student);
    return this.students;
  }
  public deleteStudent(pos: number): Student[]{
    this.students.splice(pos,1);
    return this.students;

  }//deleteStudent
  public updateStudent(pos: number, student: Student): Student[]{
    this.students[pos] = student; 
    return this.students;
  }
}
