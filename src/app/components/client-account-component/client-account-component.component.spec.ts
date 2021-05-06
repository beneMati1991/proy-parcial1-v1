import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAccountComponentComponent } from './client-account-component.component';

describe('ClientAccountComponentComponent', () => {
  let component: ClientAccountComponentComponent;
  let fixture: ComponentFixture<ClientAccountComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAccountComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAccountComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
