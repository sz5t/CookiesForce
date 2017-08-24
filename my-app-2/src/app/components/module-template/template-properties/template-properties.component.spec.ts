import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatePropertiesComponent } from './template-properties.component';

describe('TemplatePropertiesComponent', () => {
  let component: TemplatePropertiesComponent;
  let fixture: ComponentFixture<TemplatePropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatePropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
