import { Component } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from '../models/student';
import { ModalController } from '@ionic/angular';
import { UpdateStudentModalComponentPage } from '../update-student-modal-component/update-student-modal-component.page';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  searchTerm: string = '';
  public students: Student[];
  filteredStudents: any[];
  constructor(private studentService: StudentService, private modalController: ModalController) {
    this.students = this.studentService.getStudents();
    this.filteredStudents = this.students;
  }  
  filterStudents() {
    this.filteredStudents = this.students.filter(s => 
      s.controlNumber.includes(this.searchTerm) || 
      s.name.includes(this.searchTerm) || 
      s.career.includes(this.searchTerm)
    );
  }
  deleteStudent(pos: number): Student[] {
    const confirmDelete = confirm('¿Está seguro de que desea eliminar este estudiante?');
    if (confirmDelete) {
      this.students.splice(pos, 1);
    }
    return this.students;
  }
  async openUpdateModal(index: number, student: Student) {
    const modal = await this.modalController.create({
      component: UpdateStudentModalComponentPage, // Componente del modal de actualización
      componentProps: {
        index: index,
        student: student,
        studentPosition: this.filteredStudents.indexOf(student)
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss(); // Obtener datos del modal cerrado
    if (data) {
      this.studentService.updateStudent(index, data);
      this.students = this.studentService.getStudents();
      this.filteredStudents = this.students;
    }
  }
}
