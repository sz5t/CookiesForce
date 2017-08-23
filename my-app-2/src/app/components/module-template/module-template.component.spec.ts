import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleTemplateComponent } from './module-template.component';

describe('ModuleTemplateComponent', () => {
  let component: ModuleTemplateComponent;
  let fixture: ComponentFixture<ModuleTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
