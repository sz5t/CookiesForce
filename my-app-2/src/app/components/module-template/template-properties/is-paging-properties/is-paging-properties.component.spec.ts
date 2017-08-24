import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsPagingPropertiesComponent } from './is-paging-properties.component';

describe('IsPagingPropertiesComponent', () => {
  let component: IsPagingPropertiesComponent;
  let fixture: ComponentFixture<IsPagingPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsPagingPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsPagingPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
