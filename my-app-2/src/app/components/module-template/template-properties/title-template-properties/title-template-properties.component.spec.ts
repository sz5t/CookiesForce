import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleTemplatePropertiesComponent } from './title-template-properties.component';

describe('TitleTemplatePropertiesComponent', () => {
  let component: TitleTemplatePropertiesComponent;
  let fixture: ComponentFixture<TitleTemplatePropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleTemplatePropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleTemplatePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
