import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDetailComponent } from './angular-detail.component';

describe('AngularDetailComponent', () => {
  let component: AngularDetailComponent;
  let fixture: ComponentFixture<AngularDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
