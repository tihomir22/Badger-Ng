import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnclickComponent } from './btnclick.component';

describe('BtnclickComponent', () => {
  let component: BtnclickComponent;
  let fixture: ComponentFixture<BtnclickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnclickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnclickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
