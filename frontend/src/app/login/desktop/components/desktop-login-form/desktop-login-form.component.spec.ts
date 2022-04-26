import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopLoginFormComponent } from './desktop-login-form.component';

describe('DesktopLoginFormComponent', () => {
  let component: DesktopLoginFormComponent;
  let fixture: ComponentFixture<DesktopLoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesktopLoginFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
