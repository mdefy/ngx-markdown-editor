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

/**
 * Transforms a _CodeMirror_ event to an RxJS observable.
 *
 * @param cm the `CodeMirror.Editor` instance of which the event shall be observed
 * @param eventName the name of a _CodeMirror_ event
 */
export function fromCmEvent(cm: CodeMirror.Editor, eventName: string): Observable<any> {
  return new Observable((subscriber) => {
    let handler: () => void;
    switch (eventName) {
      case 'change':
        handler = (...args: any[]) => subscriber.next({ instance: args[0], changeObj: args[1] });
        break;
      case 'changes':
        handler = (...args: any[]) => subscriber.next({ instance: args[0], changes: args[1] });
        break;
      case 'beforeChange':
        handler = (...args: any[]) => subscriber.next({ instance: args[0], changeObj: args[1] });
        break;
      case 'cursorActivity':
        handler = (...args: any[]) => subscriber.next({ instance: args[0] });
        break;
      case 'keyHandled':
        handler = (...args: any[]) => subscriber.next({ instance: args[0], name: args[1], event: args[2] });
        break;
      case 'inputRead':
        handler = (...args: any[]) => subscriber.next({ instance: args[0], changeObj: args[1] });
        break;
      case 'electricInput':
        handler = (...args: any[]) => subscriber.next({ instance: args[0], line: args[1] });
        break;
      case 'beforeSelectionChange':
        handler = (...args: any[]) => subscriber.next({ instance: args[0], obj: args[1] });
        break;
      case 'viewportChange':
        handler = (...args: any[]) => subscriber.next({ instance: args[0], from: args[1], to: args[2] });
        break;
      case 'swapDoc':
        handler = (...args: any[]) => subscriber.next({ instance: args[0], oldDoc: args[1] });
        break;
      case 'gutterClick':
        handler = (...args: any[]) =>
          subscriber.next({ instance: args[0], line: args[1], gutter: args[2], clickEvent: args[3] });
        break;
      case 'gutterContextMenu':
        handler = (...args: any[]) =>
          subscriber.next({ instance: args[0], line: args[1], gutter: args[2], contextMenu: args[3] });
        break;
      case 'focus':
        handler = (...args: any[]) => subscriber.next({ instance: args[0], event: args[1] });
        break;
      case 'blur':
        handler = (...args: any[]) => subscriber.next({ instance: args[0], event: args[1] });
        break;
      case 'scroll':
        handler = (...args: any[]) => subscriber.next({ instance: args[0] });
        break;
      case 'refresh':
        handler = (...args: any[]) => subscriber.next({ instance: args[0] });
        break;
      case 'optionChange':
        handler = (...args: any[]) => subscriber.next({ instance: args[0], option: args[1] });
        break;
      case 'scrollCursorIntoView':
        handler = (...args: any[]) => subscriber.next({ instance: args[0], event: args[1] });
        break;
      case 'update':
        handler = (...args: any[]) => subscriber.next({ instance: args[0] });
        break;
      case 'renderLine':
        handler = (...args: any[]) => subscriber.next({ instance: args[0], line: args[1], element: args[2] });
        break;
      case 'overwriteToggle':
        handler = (...args: any[]) => subscriber.next({ instance: args[0], overwrite: args[1] });
        break;
      default:
        handler = (...args: any[]) => subscriber.next({ instance: args[0], event: args[1] });
    }

    if (cm) {
      cm.on(eventName, handler);
      return () => cm.off(eventName, handler);
    }

    subscriber.error(new Error('CodeMirror instance is undefined'));
    return;
  });
}
