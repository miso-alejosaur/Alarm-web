import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacSelectorComponent } from './contac-selector.component';

describe('ContacSelectorComponent', () => {
  let component: ContacSelectorComponent;
  let fixture: ComponentFixture<ContacSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContacSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContacSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
