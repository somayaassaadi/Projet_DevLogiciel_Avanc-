import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageaccueilproductComponent } from './pageaccueilproduct.component';

describe('PageaccueilproductComponent', () => {
  let component: PageaccueilproductComponent;
  let fixture: ComponentFixture<PageaccueilproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageaccueilproductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageaccueilproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
