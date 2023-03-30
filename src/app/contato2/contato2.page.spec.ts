import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Contato2Page } from './contato2.page';

describe('Contato2Page', () => {
  let component: Contato2Page;
  let fixture: ComponentFixture<Contato2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Contato2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
