import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoGridComponent } from './produto-grid.component';

describe('ProdutoGridComponent', () => {
  let component: ProdutoGridComponent;
  let fixture: ComponentFixture<ProdutoGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
