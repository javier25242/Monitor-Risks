import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopLandingScreenComponent } from './desktop-landing-screen.component';

describe('DesktopLandingScreenComponent', () => {
  let component: DesktopLandingScreenComponent;
  let fixture: ComponentFixture<DesktopLandingScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesktopLandingScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopLandingScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
