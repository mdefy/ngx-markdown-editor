import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

export class ObservableEmitter<T> extends EventEmitter<T> {
  emitObservable(o: Observable<T>) {
    const subscription = o.subscribe((x: T) => this.emit(x));
    this.subscribe(
      () => {},
      undefined,
      () => subscription.unsubscribe()
    );
  }
}
