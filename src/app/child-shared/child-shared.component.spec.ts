import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildSharedComponent } from './child-shared.component';

describe('ChildSharedComponent', () => {
  let component: ChildSharedComponent;
  let fixture: ComponentFixture<ChildSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildSharedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
