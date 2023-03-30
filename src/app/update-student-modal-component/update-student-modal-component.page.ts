import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';
@Component({
  selector: 'app-update-student-modal-component',
  templateUrl: './update-student-modal-component.page.html',
  styleUrls: ['./update-student-modal-component.page.scss'],
})
export class UpdateStudentModalComponentPage implements OnInit {
  @Input() selectedStudent!: Student;
  studentPosition: number;
  constructor(private studentService: StudentService, private modalController: ModalController,
    private navCtrl: NavController) {
    this.studentPosition = this.studentService.getStudents().indexOf(this.selectedStudent);
  }
  ngOnInit() {
  }
  updateStudent(updatedStudent: Student) {
    this.studentService.updateStudent(this.studentPosition, updatedStudent);
    this.dismissModal();
    this.navCtrl.navigateBack('/tab1');
  }

  dismissModal() {
    this.modalController.dismiss();
  }
}
