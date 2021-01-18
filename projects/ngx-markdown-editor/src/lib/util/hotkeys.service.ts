import { Injectable } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { Observable } from 'rxjs';

/**
 * An injectable hotkeys service to add keybindings.
 */
@Injectable({ providedIn: 'root' })
export class Hotkeys {
  constructor(private eventManager: EventManager) {}

  /**
   * Adds an _keydown_ event listener to the Angular `EventManager` with the specified
   * `keys`. The listener is applied to specified `element`. Returns an RxJS observable
   * of the keyboard event.
   *
   * @param element The HTML element to which the keybinding shall be applied to.
   * @param keys The key combination which shall trigger the event.
   */
    const event = `keydown.${keys}`;

    return new Observable((observer) => {
      const handler = (e: Event) => {
        e.preventDefault();
        observer.next(e);
      };

      const dispose = this.eventManager.addEventListener(element, event, handler);

      return () => {
        dispose();
      };
    });
  }
}
