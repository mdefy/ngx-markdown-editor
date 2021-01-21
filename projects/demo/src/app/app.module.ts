import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MarkdownEditorModule } from 'projects/ngx-markdown-editor/src/public-api';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MarkdownEditorModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
