// TypeScript definitions for Google Analytics gtag.js

export {};

declare global {
  interface Window {
    dataLayer: Array<any>;
    gtag: (
      command: 'config' | 'set' | 'event' | 'consent' | 'js',
      targetId: string | Date | 'default' | 'update',
      config?: {
        [key: string]: any;
      }
    ) => void;
  }

  function gtag(
    command: 'config' | 'set' | 'event' | 'consent' | 'js',
    targetId: string | Date | 'default' | 'update',
    config?: {
      [key: string]: any;
    }
  ): void;
}
