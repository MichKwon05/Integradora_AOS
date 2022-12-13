import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Equipment } from 'src/app/interfaces/equipment';

@Component({
  selector: 'app-add-edit-equipment',
  templateUrl: './add-edit-equipment.component.html',
  styleUrls: ['./add-edit-equipment.component.css']
})
export class AddEditEquipmentComponent implements OnInit {
  formEquip: FormGroup;

  constructor(private fb: UntypedFormBuilder){
    this.formEquip= this.fb.group({
      name: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  addEquipment(){
    const equipment : Equipment= {
      name: this.formEquip.value.name
    }
    console.log(equipment)
  }

}
