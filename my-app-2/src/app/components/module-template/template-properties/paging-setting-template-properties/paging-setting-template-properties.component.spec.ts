import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagingSettingTemplatePropertiesComponent } from './paging-setting-template-properties.component';

describe('PagingSettingTemplatePropertiesComponent', () => {
  let component: PagingSettingTemplatePropertiesComponent;
  let fixture: ComponentFixture<PagingSettingTemplatePropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagingSettingTemplatePropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagingSettingTemplatePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
