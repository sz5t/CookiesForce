import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModellingSettingComponent } from './modelling-setting.component';

describe('ModellingSettingComponent', () => {
  let component: ModellingSettingComponent;
  let fixture: ComponentFixture<ModellingSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModellingSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModellingSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
