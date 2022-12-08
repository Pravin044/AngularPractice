import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationlinksComponent } from './navigationlinks.component';

describe('NavigationlinksComponent', () => {
  let component: NavigationlinksComponent;
  let fixture: ComponentFixture<NavigationlinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationlinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationlinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
