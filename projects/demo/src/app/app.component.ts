import { Component, ViewChild } from '@angular/core';
import {
  MarkdownEditorComponent,
  Options,
  StatusbarItemDef,
  ToolbarItemDef,
} from 'projects/ngx-markdown-editor/src/public-api';
import { fromEvent, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(MarkdownEditorComponent) ngxMde: MarkdownEditorComponent;

  public toolbarButtons: ToolbarItemDef[] = [
    {
      name: 'toggleBold',
      shortcut: 'Alt-M',
      icon: { format: 'material', iconName: 'star' },
    },
  ];

  public data = '**Initial content**';
  public content = '';

  public statusbarItems: StatusbarItemDef[] = [
    'characterCount',
    '|',
    {
      name: 'cursorPosition',
      value: {
        de: of('Deutsch'),
        default: fromEvent(document, 'click').pipe(map((e: MouseEvent) => e.clientX.toString())),
      },
    },
    '|',
  ];

  public options: Partial<Options> = {
    markupThemes: ['preview-like-markup'],
  };

  public materialStyle = 'legacy';

  public disabled = false;

  public showToolbar = true;
  public showStatusbar = true;

  test() {
    this.ngxMde.mde.setContent('Initial _Markdown_ content...');
  }

  onContentChange(event: any) {
    this.content = event.instance.getValue();
  }
}
