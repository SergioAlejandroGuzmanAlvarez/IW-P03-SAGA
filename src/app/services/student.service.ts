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
        nip: 1409,
        photo:"https://picsum.photos/200/300/?blur"
      }
    ];
  }
  public getStudents(): Student[]{
    return this.students;
  }
  
  public getStudentByControlNumber(cn: string){
    let student: Student= {
      controlNumber: "18401126",
      age: 23,
      carrer: "ISC",
      curp: "GUAS000304HNTLZRA6",
      email: "sealguzmanal@ittepic.edu.mx",
      name: "Guzman Alvarez Sergio Alejandro",
      nip: 1409,
      photo:"https://picsum.photos/200/300/?blur"
    }
    this.students.forEach(element =>{
        if(element.controlNumber === cn)
        student = element;
        return this.students.find(
          elem => {
            return elem.controlNumber === cn;
          }
        )
    });
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
  }
}
