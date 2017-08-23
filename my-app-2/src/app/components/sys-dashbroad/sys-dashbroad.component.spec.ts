import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysDashbroadComponent } from './sys-dashbroad.component';

describe('SysDashbroadComponent', () => {
  let component: SysDashbroadComponent;
  let fixture: ComponentFixture<SysDashbroadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysDashbroadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysDashbroadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
