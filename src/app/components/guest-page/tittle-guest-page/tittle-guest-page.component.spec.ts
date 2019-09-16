import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TittleGuestPageComponent } from './tittle-guest-page.component';

describe('TittleGuestPageComponent', () => {
  let component: TittleGuestPageComponent;
  let fixture: ComponentFixture<TittleGuestPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TittleGuestPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TittleGuestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
