import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBoxMessageComponent } from './modal-box-message.component';

describe('ModalBoxMessageComponent', () => {
  let component: ModalBoxMessageComponent;
  let fixture: ComponentFixture<ModalBoxMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalBoxMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBoxMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
