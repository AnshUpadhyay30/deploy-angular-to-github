import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurFounderComponent } from './our-founder.component';

describe('OurFounderComponent', () => {
  let component: OurFounderComponent;
  let fixture: ComponentFixture<OurFounderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurFounderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurFounderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
