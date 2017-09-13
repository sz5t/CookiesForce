import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataModellingComponent } from './data-modelling.component';

describe('DataModellingComponent', () => {
  let component: DataModellingComponent;
  let fixture: ComponentFixture<DataModellingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataModellingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataModellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
