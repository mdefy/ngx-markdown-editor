import { Component } from '@angular/core';
import { MarkedOptions } from 'ngx-markdown';
import { NgxMdeItemDef, NgxMdeOptions, NgxMdeStatusbarItemDef } from 'projects/ngx-markdown-editor/src/lib/types';
import { fromEvent, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public toolbarButtons: NgxMdeItemDef[] = [
    {
      name: 'toggleBold',
      icon: {
        de: {
          format: 'material',
          iconName: 'code',
        },
        default: {
          format: 'material',
          iconName: 'format_bold',
        },
      },
      tooltip: {
        de: 'Angie',
        default: 'Krumpf',
      },
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
    markdownGuideUrl: {
      de: 'http://example.com',
      default: 'https://www.markdownguide.org/basic-syntax/',
    },
  };

  public markedOptions: MarkedOptions = {
    gfm: true,
  };

  test(event: any) {
    console.log(event);
  }
}
