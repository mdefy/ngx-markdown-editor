import { TestBed } from '@angular/core/testing';

import { NgxMarkdownEditorService } from './ngx-markdown-editor.service';

describe('NgxMarkdownEditorService', () => {
  let service: NgxMarkdownEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMarkdownEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
