import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateCustomComponent } from './template-custom.component';

describe('TemplateCustomComponent', () => {
  let component: TemplateCustomComponent;
  let fixture: ComponentFixture<TemplateCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
