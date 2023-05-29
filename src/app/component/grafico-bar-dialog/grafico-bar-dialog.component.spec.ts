import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoBarDialogComponent } from './grafico-bar-dialog.component';

describe('GraficoBarDialogComponent', () => {
  let component: GraficoBarDialogComponent;
  let fixture: ComponentFixture<GraficoBarDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoBarDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoBarDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
