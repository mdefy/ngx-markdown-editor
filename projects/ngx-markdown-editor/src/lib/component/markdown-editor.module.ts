import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule, SecurityContext } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarkdownModule, MarkdownModuleConfig, SECURITY_CONTEXT } from 'ngx-markdown';
import { MarkdownEditorComponent } from './markdown-editor.component';

export interface MarkdownEditorModuleConfig {
  previewConfig?: Omit<MarkdownModuleConfig, 'loader'>;
}

@NgModule({
  declarations: [MarkdownEditorComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTooltipModule,
    MarkdownModule.forRoot(),
  ],
  exports: [MarkdownEditorComponent],
})
export class MarkdownEditorModule {
  static forRoot(config?: MarkdownEditorModuleConfig): ModuleWithProviders<MarkdownEditorModule> {
    return {
      ngModule: MarkdownEditorModule,
      providers: [
        config?.previewConfig?.markedOptions || [],
        {
          provide: SECURITY_CONTEXT,
          useValue: config?.previewConfig?.sanitize ?? SecurityContext.HTML,
        },
      ],
    };
  }
  static forChild(): ModuleWithProviders<MarkdownEditorModule> {
    return {
      ngModule: MarkdownEditorModule,
    };
  }
}
