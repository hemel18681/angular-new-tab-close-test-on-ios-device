import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IosTestComponent } from './ios-test.component';

describe('IosTestComponent', () => {
  let component: IosTestComponent;
  let fixture: ComponentFixture<IosTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IosTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IosTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
