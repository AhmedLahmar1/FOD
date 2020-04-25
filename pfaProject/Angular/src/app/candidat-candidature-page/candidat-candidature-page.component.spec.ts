import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatCandidaturePageComponent } from './candidat-candidature-page.component';

describe('CandidatCandidaturePageComponent', () => {
  let component: CandidatCandidaturePageComponent;
  let fixture: ComponentFixture<CandidatCandidaturePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatCandidaturePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatCandidaturePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
