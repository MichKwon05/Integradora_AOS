import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStudyroomComponent } from './list-studyroom.component';

describe('ListStudyroomComponent', () => {
  let component: ListStudyroomComponent;
  let fixture: ComponentFixture<ListStudyroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListStudyroomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListStudyroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
