import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopLoginScreenComponent } from './desktop-login-screen.component';

describe('DesktopLoginScreenComponent', () => {
  let component: DesktopLoginScreenComponent;
  let fixture: ComponentFixture<DesktopLoginScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesktopLoginScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopLoginScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
