import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGraphicsComponent } from './user-graphics.component';

describe('UserGraphicsComponent', () => {
  let component: UserGraphicsComponent;
  let fixture: ComponentFixture<UserGraphicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserGraphicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGraphicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
