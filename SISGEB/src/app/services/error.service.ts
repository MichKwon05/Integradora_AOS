import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private toastr: ToastrService) { }

  msjError(e: HttpErrorResponse) {
    if (e.error.mensaje) {
      this.toastr.error(e.error.mensaje, 'Error');
    } else {
      this.toastr.error('No se logró establecer conexión con el servidor', 'Error');
    }
  }
}
