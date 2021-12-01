import { useEffect } from 'react';

declare global {
  interface Window {
    _customEventTargetElement: undefined | HTMLDivElement;
  }
}

const getElement = (function () {
  let targetElement = null;
  if (
    typeof window !== 'undefined' &&
    typeof (window as any).addEventListener !== 'undefined'
  ) {
    targetElement = document.createElement('div');
  }

  return function () {
    return targetElement;
  };
})();

export function useCustomEventListener<T>(
  eventName: string,
  eventHandler: (data: T) => void
): void {
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      typeof (window as any).addEventListener !== 'undefined'
    ) {
      const element = getElement();
      const handleEvent = (event: CustomEvent | Event) => {
        const data = (event as CustomEvent).detail;
        eventHandler(data);
      };

      element.addEventListener(eventName, handleEvent, false);

      return () => {
        element.removeEventListener(eventName, handleEvent, false);
      };
    }
  });
}

export function emitCustomEvent<T>(eventName: string, data?: T): void {
  if (
    typeof window !== 'undefined' &&
    typeof (window as any).addEventListener !== 'undefined'
  ) {
    const element = getElement();
    const event = new CustomEvent(eventName, { detail: data });
    element.dispatchEvent(event);
  }
}
