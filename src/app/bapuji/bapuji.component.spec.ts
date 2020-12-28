import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BapujiComponent } from './bapuji.component';

describe('BapujiComponent', () => {
  let component: BapujiComponent;
  let fixture: ComponentFixture<BapujiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BapujiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BapujiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
