import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conocimientos } from './conocimientos';

describe('Conocimientos', () => {
  let component: Conocimientos;
  let fixture: ComponentFixture<Conocimientos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Conocimientos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Conocimientos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
