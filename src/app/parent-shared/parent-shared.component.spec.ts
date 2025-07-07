import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentSharedComponent } from './parent-shared.component';

describe('ParentSharedComponent', () => {
  let component: ParentSharedComponent;
  let fixture: ComponentFixture<ParentSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentSharedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
