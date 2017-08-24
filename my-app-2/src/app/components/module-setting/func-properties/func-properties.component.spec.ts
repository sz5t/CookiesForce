import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncPropertiesComponent } from './func-properties.component';

describe('FuncPropertiesComponent', () => {
  let component: FuncPropertiesComponent;
  let fixture: ComponentFixture<FuncPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
