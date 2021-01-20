import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * An event emitter that is able to transform an RxJS observable
 * into an Angular event.
 */
export class ObservableEmitter<T> extends EventEmitter<T> {
  /**
   * Subscribes to the specified RxJS observable and emits an event
   * containing the observed value. Unsubscribes the passed observable
   * when the event is unsubscribed.
   */
  emitObservable(o: Observable<T>) {
    const subscription = o.subscribe((x: T) => this.emit(x));
    this.subscribe(
      () => {},
      undefined,
      () => subscription.unsubscribe()
    );
  }
}
