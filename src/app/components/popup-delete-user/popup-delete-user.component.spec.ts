import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupDeleteUserComponent } from './popup-delete-user.component';

describe('PopupDeleteUserComponent', () => {
  let component: PopupDeleteUserComponent;
  let fixture: ComponentFixture<PopupDeleteUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupDeleteUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopupDeleteUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
