import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTemplatePropertiesComponent } from './button-template-properties.component';

describe('ButtonTemplatePropertiesComponent', () => {
  let component: ButtonTemplatePropertiesComponent;
  let fixture: ComponentFixture<ButtonTemplatePropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonTemplatePropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonTemplatePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
