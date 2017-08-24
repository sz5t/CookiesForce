import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortPropertiesComponent } from './sort-properties.component';

describe('SortPropertiesComponent', () => {
  let component: SortPropertiesComponent;
  let fixture: ComponentFixture<SortPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
