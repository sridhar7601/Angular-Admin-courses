import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyofcourseComponent } from './bodyofcourse.component';

describe('BodyofcourseComponent', () => {
  let component: BodyofcourseComponent;
  let fixture: ComponentFixture<BodyofcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyofcourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyofcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
