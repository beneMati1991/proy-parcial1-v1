import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessMediaComponentComponent } from './access-media-component.component';

describe('AccessMediaComponentComponent', () => {
  let component: AccessMediaComponentComponent;
  let fixture: ComponentFixture<AccessMediaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessMediaComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessMediaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
