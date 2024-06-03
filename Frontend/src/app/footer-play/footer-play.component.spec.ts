import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPlayComponent } from './footer-play.component';

describe('FooterPlayComponent', () => {
  let component: FooterPlayComponent;
  let fixture: ComponentFixture<FooterPlayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterPlayComponent]
    });
    fixture = TestBed.createComponent(FooterPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
