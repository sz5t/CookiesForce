import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldTemplatePropertiesComponent } from './field-template-properties.component';

describe('FieldTemplatePropertiesComponent', () => {
  let component: FieldTemplatePropertiesComponent;
  let fixture: ComponentFixture<FieldTemplatePropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldTemplatePropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldTemplatePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
