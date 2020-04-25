import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatureItemComponent } from './candidature-item.component';

describe('CandidatureItemComponent', () => {
  let component: CandidatureItemComponent;
  let fixture: ComponentFixture<CandidatureItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatureItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatureItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
