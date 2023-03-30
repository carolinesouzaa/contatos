import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Contato3Page } from './contato3.page';

describe('Contato3Page', () => {
  let component: Contato3Page;
  let fixture: ComponentFixture<Contato3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Contato3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
