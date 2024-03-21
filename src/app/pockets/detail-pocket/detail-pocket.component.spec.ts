import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPocketComponent } from './detail-pocket.component';

describe('DetailPocketComponent', () => {
  let component: DetailPocketComponent;
  let fixture: ComponentFixture<DetailPocketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailPocketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailPocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
