import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Studyroom } from 'src/app/interfaces/studyroom';
import { StudyroomService } from 'src/app/services/studyroom.service';

@Component({
  selector: 'app-add-edit-studyroom',
  templateUrl: './add-edit-studyroom.component.html',
  styleUrls: ['./add-edit-studyroom.component.css']
})
export class AddEditStudyroomComponent implements OnInit {
  formStudy: FormGroup;
  loading: boolean = false;
  id: number;
  operacion: string = 'Agregar';

  constructor(private fb: FormBuilder,
    private _studyRoomService: StudyroomService,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute) {
    this.formStudy = this.fb.group({
      name: ['', Validators.required],
      capacity: ['', Validators.required]
    })
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
    //console.log(this.id);
  }

  ngOnInit(): void {
    if (this.id != 0) {
      this.operacion = 'Editar';
      this.getStudyRoom(this.id);
    }
  }

  getStudyRoom(id: number) {
    this.loading = true;
    this._studyRoomService.getStudyroom(id).subscribe((data: Studyroom) => {
      this.loading = false;
      this.formStudy.setValue({
        name: data.name,
        capacity: data.capacity
      })
    })
  }

  addStudy() {
    const study: Studyroom = {
      name: this.formStudy.value.name,
      capacity: this.formStudy.value.capacity
    }
    this.loading = true;

    if (this.id !== 0) {
      // Editar
      study.id = this.id;
      this._studyRoomService.updateStudyroom(this.id, study).subscribe({
        next: () => {
          this.toastr.info(`${study.name} fue actualizada con exito`, 'Sala Actualizada');
          this.loading = false;
          this.router.navigate(['/getStudyRooms']);
        },
        error: (e: HttpErrorResponse) => {
          this.loading = false;
          this.msjError(e);
        }
      })
    } else {
      // Agregar
      this._studyRoomService.saveStudyroom(study).subscribe({
        next: () => {
          this.toastr.success(`${study.name} fue registrada con exito`, 'Sala Registrada');
          this.loading = false;
          this.router.navigate(['/getStudyRooms']);
        },
        error: (e: HttpErrorResponse) => {
          this.loading = false;
          this.msjError(e);
        }
      })
    }
  }

  msjError(e: HttpErrorResponse) {
    if (e.error.mensaje) {
      this.toastr.error(e.error.mensaje, 'Error');
    } else {
      this.toastr.error('No se logró establecer conexión con el servidor', 'Error');
    }
  }
}
