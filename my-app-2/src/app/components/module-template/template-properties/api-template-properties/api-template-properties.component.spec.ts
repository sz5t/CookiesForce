import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiTemplatePropertiesComponent } from './api-template-properties.component';

describe('ApiTemplatePropertiesComponent', () => {
  let component: ApiTemplatePropertiesComponent;
  let fixture: ComponentFixture<ApiTemplatePropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiTemplatePropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiTemplatePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
