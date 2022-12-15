import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Equipment } from 'src/app/interfaces/equipment';
import { EquipmentService } from 'src/app/services/equipment.service';

@Component({
  selector: 'app-list-equipment',
  templateUrl: './list-equipment.component.html',
  styleUrls: ['./list-equipment.component.css']
})
export class ListEquipmentComponent implements OnInit {
  listEquipments: Equipment[] = []
  loading: Boolean = false;

  constructor(private _equipmentService: EquipmentService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getListEquipments();
  }

  getListEquipments() {
    this.loading = true;
    this._equipmentService.getListEquipments().subscribe({
      next: (data: Equipment[]) => {
        this.listEquipments = data;
        this.loading = false;
      },
      error: (e: HttpErrorResponse) => {
        this.loading = false;
        this.msjError(e);
      }
    })
  }

  deleteEquipment(id: number) {
    this.loading = true;
    this._equipmentService.deleteEquipment(id).subscribe({
      next: () => {
        this.getListEquipments();
        this.toastr.warning("Equipo Eliminado con exito", "Equipo Eliminado")
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
