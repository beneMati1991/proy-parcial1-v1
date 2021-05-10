import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessMediaComponent } from './access-media.component';

describe('AccessMediaComponent', () => {
  let component: AccessMediaComponent;
  let fixture: ComponentFixture<AccessMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessMediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
