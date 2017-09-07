import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTitleTemplatePropertiesComponent } from './show-title-template-properties.component';

describe('ShowTitleTemplatePropertiesComponent', () => {
  let component: ShowTitleTemplatePropertiesComponent;
  let fixture: ComponentFixture<ShowTitleTemplatePropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTitleTemplatePropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTitleTemplatePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
