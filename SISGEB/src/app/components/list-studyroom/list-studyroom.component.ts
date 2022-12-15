import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Studyroom } from 'src/app/interfaces/studyroom';
import { StudyroomService } from 'src/app/services/studyroom.service';

@Component({
  selector: 'app-list-studyroom',
  templateUrl: './list-studyroom.component.html',
  styleUrls: ['./list-studyroom.component.css']
})
export class ListStudyroomComponent implements OnInit {
  listStudyrooms: Studyroom[] = []
  loading: Boolean = false;

  constructor(private _roomService: StudyroomService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getListStudyrooms();
  }

  getListStudyrooms() {
    this.loading = true;
    this._roomService.getListStudyrooms().subscribe({
      next: (data: Studyroom[]) => {
        this.listStudyrooms = data;
        this.loading = false;
      },
      error: (e: HttpErrorResponse) => {
        this.loading = false;
        this.msjError(e);
      }
    })
  }

  deleteStudyroom(id: number) {
    this.loading = true;
    this._roomService.deleteStudyroom(id).subscribe({
      next: () => {
        this.getListStudyrooms();
        this.toastr.warning("Sala Eliminada con exito", "Sala Eliminada")
      },
      error: (e: HttpErrorResponse) => {
        this.loading = false;
        this.msjError(e);
      }
    })
  }
  msjError(e: HttpErrorResponse) {
    if (e.error.mensaje) {
      this.toastr.error(e.error.mensaje, 'Error');
    } else {
      this.toastr.error('No se logró establecer conexión con el servidor', 'Error');
    }
  }
}
