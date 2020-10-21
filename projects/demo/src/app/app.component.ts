import { Component, ViewChild } from '@angular/core';
import { MarkedOptions } from 'ngx-markdown';
import { NgxMdeItemDef, NgxMdeOptions, NgxMdeStatusbarItemDef } from 'projects/ngx-markdown-editor/src/lib/types';
import { MarkdownEditorComponent } from 'projects/ngx-markdown-editor/src/public-api';
import { fromEvent, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(MarkdownEditorComponent) ngxMde: MarkdownEditorComponent;

  private b = false;
  public toolbarButtons: NgxMdeItemDef[] = [
    {
      name: 'toggleBold',
      icon: {
        format: 'material',
        iconName: 'star',
      },
      shortcut: 'Alt-K',
    },
    'openMarkdownGuide',
  ];

  public statusbarItems: NgxMdeStatusbarItemDef[] = [
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
    'cursorPosition',
  ];

  public options: Partial<NgxMdeOptions> = {
    autofocus: true,
    lineNumbers: false,
    placeholder: ' Hey :)',
  };

  public markedOptions: MarkedOptions = {
    gfm: true,
  };

  public materialStyle = 'legacy';

  public disabled = false;

  test() {
    // this.materialStyle = 'legacy';
    this.options = { lineNumbers: false };
  }
}
