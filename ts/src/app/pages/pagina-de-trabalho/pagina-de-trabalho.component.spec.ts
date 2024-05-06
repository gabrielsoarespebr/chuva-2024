import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaDeTrabalhoComponent } from './pagina-de-trabalho.component';

describe('PaginaDeTrabalhoComponent', () => {
  let component: PaginaDeTrabalhoComponent;
  let fixture: ComponentFixture<PaginaDeTrabalhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaDeTrabalhoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaDeTrabalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
