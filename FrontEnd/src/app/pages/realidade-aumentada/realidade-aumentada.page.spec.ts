import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RealidadeAumentadaPage } from './realidade-aumentada.page';

describe('RealidadeAumentadaPage', () => {
  let component: RealidadeAumentadaPage;
  let fixture: ComponentFixture<RealidadeAumentadaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RealidadeAumentadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
