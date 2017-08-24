import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortTemplatePropertiesComponent } from './sort-template-properties.component';

describe('SortTemplatePropertiesComponent', () => {
  let component: SortTemplatePropertiesComponent;
  let fixture: ComponentFixture<SortTemplatePropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortTemplatePropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortTemplatePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
