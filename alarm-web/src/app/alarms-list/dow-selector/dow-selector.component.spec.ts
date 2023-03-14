import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DowSelectorComponent } from './dow-selector.component';

describe('DowSelectorComponent', () => {
  let component: DowSelectorComponent;
  let fixture: ComponentFixture<DowSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DowSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DowSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
