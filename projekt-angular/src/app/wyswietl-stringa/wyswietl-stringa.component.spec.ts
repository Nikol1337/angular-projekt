import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WyswietlStringaComponent } from './wyswietl-stringa.component';

describe('WyswietlStringaComponent', () => {
  let component: WyswietlStringaComponent;
  let fixture: ComponentFixture<WyswietlStringaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WyswietlStringaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WyswietlStringaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
