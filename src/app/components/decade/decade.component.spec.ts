import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecadeComponent } from './decade.component';

describe('DecadeComponent', () => {
  let component: DecadeComponent;
  let fixture: ComponentFixture<DecadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
