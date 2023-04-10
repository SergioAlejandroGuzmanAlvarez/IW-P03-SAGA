import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  studentForm: FormGroup = new FormGroup({});
  students: Student[] = [];
  student!: Student; // cambiar de arreglo a estudiante individual

  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const controlNumber = this.route.snapshot.params['id'];
    this.student = this.studentService.getStudentByControlNumber(controlNumber);

    this.studentForm = this.formBuilder.group({
      name: [this.student.name, Validators.required],
      age: [this.student.age, Validators.required],
      nip: [this.student.nip, Validators.required],
      email: [this.student.email, [Validators.required, Validators.email]],
      career: [this.student.career, Validators.required],
      curp: [this.student.curp, Validators.required],
      photo: [this.student.photo, Validators.required]
    });
  }

  onSubmit() {
    const updatedStudent: Student = this.studentForm.value;
    updatedStudent.controlNumber = this.student.controlNumber;
    this.studentService.updateStudent(updatedStudent);
    this.router.navigate(['/tabs/tab1']);
  }
}
