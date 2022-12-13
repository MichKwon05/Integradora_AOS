import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Studyroom } from 'src/app/interfaces/studyroom';
import { StudyroomService } from 'src/app/services/studyroom.service';

@Component({
  selector: 'app-list-studyroom',
  templateUrl: './list-studyroom.component.html',
  styleUrls: ['./list-studyroom.component.css']
})
export class ListStudyroomComponent implements OnInit{
  listStudyrooms: Studyroom[] = []
  loading: Boolean = false;

  constructor(private _roomService: StudyroomService, private toastr: ToastrService){  }

  ngOnInit(): void {
    this.getListStudyrooms();
  }

  getListStudyrooms(){
    this.loading = true;
    this._roomService.getListStudyrooms().subscribe((data: Studyroom[]) => {
      this.listStudyrooms = data;
      this.loading = false;
    })
  }

  deleteStudyroom(id: number){
    this.loading = true;
    this._roomService.deleteStudyroom(id).subscribe(() => {
      this.getListStudyrooms();
      this.toastr.warning("Sala Eliminada con exito", "Sala Eliminada")
    })
  }
}
