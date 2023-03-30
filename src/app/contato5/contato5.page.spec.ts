import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Contato5Page } from './contato5.page';

describe('Contato5Page', () => {
  let component: Contato5Page;
  let fixture: ComponentFixture<Contato5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Contato5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
