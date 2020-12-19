import { Observable } from 'rxjs';

/* eslint-disable @typescript-eslint/unified-signatures */
export function fromCmEvent(
  cm: CodeMirror.Editor,
  eventName: 'change'
): Observable<{ instance: CodeMirror.Editor; changeObj: CodeMirror.EditorChangeLinkedList }>;
export function fromCmEvent(
  cm: CodeMirror.Editor,
  eventName: 'changes'
): Observable<{ instance: CodeMirror.Editor; changes: CodeMirror.EditorChangeLinkedList[] }>;
export function fromCmEvent(
  cm: CodeMirror.Editor,
  eventName: 'beforeChange'
): Observable<{ instance: CodeMirror.Editor; changeObj: CodeMirror.EditorChangeCancellable }>;
export function fromCmEvent(
  cm: CodeMirror.Editor,
  eventName: 'cursorActivity'
): Observable<{ instance: CodeMirror.Editor }>;
export function fromCmEvent(
  cm: CodeMirror.Editor,
  eventName: 'keyHandled'
): Observable<{ instance: CodeMirror.Editor; name: string; event: KeyboardEvent }>;
export function fromCmEvent(
  cm: CodeMirror.Editor,
  eventName: 'inputRead'
): Observable<{ instance: CodeMirror.Editor; changeObj: CodeMirror.EditorChange }>;
export function fromCmEvent(
  cm: CodeMirror.Editor,
  eventName: 'electricInput'
): Observable<{ instance: CodeMirror.Editor; line: number }>;
export function fromCmEvent(
  cm: CodeMirror.Editor,
  eventName: 'beforeSelectionChange'
): Observable<{ instance: CodeMirror.Editor; obj: CodeMirror.EditorSelectionChange }>;
export function fromCmEvent(
  cm: CodeMirror.Editor,
  eventName: 'viewportChange'
): Observable<{ instance: CodeMirror.Editor; from: number; to: number }>;
export function fromCmEvent(
  cm: CodeMirror.Editor,
  eventName: 'swapDoc'
): Observable<{ instance: CodeMirror.Editor; oldDoc: CodeMirror.Doc }>;
export function fromCmEvent(
  cm: CodeMirror.Editor,
  eventName: 'gutterClick'
): Observable<{ instance: CodeMirror.Editor; line: number; gutter: string; clickEvent: MouseEvent }>;
export function fromCmEvent(
  cm: CodeMirror.Editor,
  eventName: 'gutterContextMenu'
): Observable<{ instance: CodeMirror.Editor; line: number; gutter: string; contextMenu: MouseEvent }>;
export function fromCmEvent(
  cm: CodeMirror.Editor,
  eventName: 'focus'
): Observable<{ instance: CodeMirror.Editor; event: FocusEvent }>;
export function fromCmEvent(
  cm: CodeMirror.Editor,
  eventName: 'blur'
): Observable<{ instance: CodeMirror.Editor; event: FocusEvent }>;

export function fromCmEvent(cm: CodeMirror.Editor, eventName: 'scroll'): Observable<{ instance: CodeMirror.Editor }>;
export function fromCmEvent(cm: CodeMirror.Editor, eventName: 'refresh'): Observable<{ instance: CodeMirror.Editor }>;
export function fromCmEvent(
  cm: CodeMirror.Editor,
  eventName: 'optionChange'
): Observable<{ instance: CodeMirror.Editor; option: string }>;
export function fromCmEvent(
  cm: CodeMirror.Editor,
  eventName: 'scrollCursorIntoView'
): Observable<{ instance: CodeMirror.Editor; event: Event }>;
export function fromCmEvent(cm: CodeMirror.Editor, eventName: 'update'): Observable<{ instance: CodeMirror.Editor }>;
export function fromCmEvent(
  cm: CodeMirror.Editor,
  eventName: 'renderLine'
): Observable<{ instance: CodeMirror.Editor; line: CodeMirror.LineHandle; element: HTMLElement }>;
export function fromCmEvent(
  cm: CodeMirror.Editor,
  eventName: 'overwriteToggle'
): Observable<{ instance: CodeMirror.Editor; overwrite: boolean }>;
export function fromCmEvent<K extends CodeMirror.DOMEvent & keyof GlobalEventHandlersEventMap>(
  cm: CodeMirror.Editor,
  eventName: K
): Observable<{ instance: CodeMirror.Editor; event: GlobalEventHandlersEventMap[K] }>;
export function fromCmEvent<K extends CodeMirror.DOMEvent & keyof DocumentAndElementEventHandlersEventMap>(
  cm: CodeMirror.Editor,
  eventName: K
): Observable<{ instance: CodeMirror.Editor; event: DocumentAndElementEventHandlersEventMap[K] }>;

export function fromCmEvent(cm: CodeMirror.Editor, eventName: string): Observable<{ instance: CodeMirror.Editor }> {
  return new Observable((subscriber) => {
    const handler = (...args: any[]) => subscriber.next(args.length > 1 ? args : args[0]);

    if (cm) {
      cm.on(eventName, handler);
      return () => cm.off(eventName, handler);
    }

    subscriber.error(new Error('CodeMirror instance is undefined'));
    return;
  });
}
