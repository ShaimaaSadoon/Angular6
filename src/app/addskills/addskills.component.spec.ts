import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddskillsComponent } from './addskills.component';

describe('AddskillsComponent', () => {
  let component: AddskillsComponent;
  let fixture: ComponentFixture<AddskillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddskillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
