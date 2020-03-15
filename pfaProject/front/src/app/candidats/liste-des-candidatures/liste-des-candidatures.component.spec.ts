import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesCandidaturesComponent } from './liste-des-candidatures.component';

describe('ListeDesCandidaturesComponent', () => {
  let component: ListeDesCandidaturesComponent;
  let fixture: ComponentFixture<ListeDesCandidaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeDesCandidaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDesCandidaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
