import { Component } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from '../models/student';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  studentForm: FormGroup = new FormGroup({});
  students: Student[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService
  ) {
    this.createForm();
    this.students = this.studentService.getStudents();
  }
  createForm() {
    this.studentForm = this.formBuilder.group({
      controlNumber: ['', Validators.required],
      name: ['', Validators.required],
      curp: ['', Validators.required],
      age: ['', Validators.required],
      nip: ['', Validators.required],
      email: ['', Validators.required],
      career: ['', Validators.required],
      photo: ['', Validators.required]
    });
  }
  onSubmit() {
    const student: Student = this.studentForm.value;
    this.studentService.newStudent(student);
    this.studentForm.reset();
  }
}
