import { Injectable } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Hotkeys {
  constructor(private eventManager: EventManager) {}

  addShortcut(element: HTMLElement, keys: string) {
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
