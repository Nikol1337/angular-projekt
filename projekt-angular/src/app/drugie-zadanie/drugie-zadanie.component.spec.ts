import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugieZadanieComponent } from './drugie-zadanie.component';

describe('DrugieZadanieComponent', () => {
  let component: DrugieZadanieComponent;
  let fixture: ComponentFixture<DrugieZadanieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrugieZadanieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrugieZadanieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
