import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRegisteredComponent } from './menu-registered.component';

describe('MenuRegisteredComponent', () => {
  let component: MenuRegisteredComponent;
  let fixture: ComponentFixture<MenuRegisteredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuRegisteredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuRegisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
