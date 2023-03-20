import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyofcoursecontentComponent } from './bodyofcoursecontent.component';

describe('BodyofcoursecontentComponent', () => {
  let component: BodyofcoursecontentComponent;
  let fixture: ComponentFixture<BodyofcoursecontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyofcoursecontentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyofcoursecontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
