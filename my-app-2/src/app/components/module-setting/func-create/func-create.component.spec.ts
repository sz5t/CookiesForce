import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncCreateComponent } from './func-create.component';

describe('FuncCreateComponent', () => {
  let component: FuncCreateComponent;
  let fixture: ComponentFixture<FuncCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
