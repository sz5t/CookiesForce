import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiItemTemplatePropertiesComponent } from './api-item-template-properties.component';

describe('ApiItemTemplatePropertiesComponent', () => {
  let component: ApiItemTemplatePropertiesComponent;
  let fixture: ComponentFixture<ApiItemTemplatePropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiItemTemplatePropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiItemTemplatePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
