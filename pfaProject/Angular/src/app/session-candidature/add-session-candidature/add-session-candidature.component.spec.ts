import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSessionCandidatureComponent } from './add-session-candidature.component';

describe('AddSessionCandidatureComponent', () => {
  let component: AddSessionCandidatureComponent;
  let fixture: ComponentFixture<AddSessionCandidatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSessionCandidatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSessionCandidatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
