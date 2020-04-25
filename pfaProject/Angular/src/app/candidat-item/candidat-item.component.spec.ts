import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatItemComponent } from './candidat-item.component';

describe('CandidatItemComponent', () => {
  let component: CandidatItemComponent;
  let fixture: ComponentFixture<CandidatItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
