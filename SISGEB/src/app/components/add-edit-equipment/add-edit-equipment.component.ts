import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Equipment } from 'src/app/interfaces/equipment';
import { EquipmentService } from 'src/app/services/equipment.service';

@Component({
  selector: 'app-add-edit-equipment',
  templateUrl: './add-edit-equipment.component.html',
  styleUrls: ['./add-edit-equipment.component.css']
})
export class AddEditEquipmentComponent implements OnInit {
  formEquip: FormGroup;
  loading: boolean = false;
  id: number;
  operacion: string = 'Agregar';

  constructor(private fb: FormBuilder,
    private _equipService: EquipmentService,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute){
    this.formEquip= this.fb.group({
      name: ['', Validators.required]
    })
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    if(this.id != 0){
      this.operacion = 'Editar'
      this.getEquipment(this.id);
    }
  }

  getEquipment(id: number){
    this.loading = true;
    this._equipService.getEquipment(id).subscribe((data:Equipment) => {
      this.loading = false;
      this.formEquip.setValue({
        name: data.name
      })
    })
  }

  addEquipment(){
    const equipment : Equipment= {
      name: this.formEquip.value.name
    }
    this.loading = true;
    
    if(this.id !== 0){
      // Editar
      equipment.id = this.id;
      this._equipService.updateEquipment(this.id, equipment).subscribe(() => {
        this.toastr.info(`${equipment.name} fue actualizado con exito`, 'Usuario Actualizado');
        this.loading = false;
        this.router.navigate(['/getEquipments']);
      })
    }else{
      // Agregar
      this._equipService.saveEquipment(equipment).subscribe(() => {
        this.toastr.success(`${equipment.name} fue registrado con exito`, 'Usuario Registrado');
        this.loading = false;
        this.router.navigate(['/getEquipments']);
      })
    }
  }

}
