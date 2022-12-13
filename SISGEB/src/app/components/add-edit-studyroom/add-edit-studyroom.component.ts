import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Studyroom } from 'src/app/interfaces/studyroom';

@Component({
  selector: 'app-add-edit-studyroom',
  templateUrl: './add-edit-studyroom.component.html',
  styleUrls: ['./add-edit-studyroom.component.css']
})
export class AddEditStudyroomComponent implements OnInit {
  formStudy: FormGroup;

  constructor(private fb: FormBuilder){
    this.formStudy = this.fb.group({
      name: ['', Validators.required],
      capacity: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  addStudy(){
    const study: Studyroom = {
      name: this.formStudy.value.name,
      capacity: this.formStudy.value.capacity
    }
  }

}
