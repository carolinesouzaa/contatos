import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Contato4Page } from './contato4.page';

describe('Contato4Page', () => {
  let component: Contato4Page;
  let fixture: ComponentFixture<Contato4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Contato4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
