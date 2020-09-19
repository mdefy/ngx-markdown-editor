import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MarkdownEditorModule } from 'projects/ngx-markdown-editor/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MarkdownEditorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
