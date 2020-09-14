import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMarkdownEditorComponent } from './ngx-markdown-editor.component';

describe('NgxMarkdownEditorComponent', () => {
  let component: NgxMarkdownEditorComponent;
  let fixture: ComponentFixture<NgxMarkdownEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxMarkdownEditorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMarkdownEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
