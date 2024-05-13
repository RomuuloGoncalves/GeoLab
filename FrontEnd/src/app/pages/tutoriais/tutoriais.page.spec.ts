import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TutoriaisPage } from './tutoriais.page';

describe('TutoriaisPage', () => {
  let component: TutoriaisPage;
  let fixture: ComponentFixture<TutoriaisPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TutoriaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
