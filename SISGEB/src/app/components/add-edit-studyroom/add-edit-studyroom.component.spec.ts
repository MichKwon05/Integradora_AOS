import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditStudyroomComponent } from './add-edit-studyroom.component';

describe('AddEditStudyroomComponent', () => {
  let component: AddEditStudyroomComponent;
  let fixture: ComponentFixture<AddEditStudyroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditStudyroomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditStudyroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
