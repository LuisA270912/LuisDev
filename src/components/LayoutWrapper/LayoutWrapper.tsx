// components/LayoutWrapper.tsx
'use client';

import { useEffect } from 'react';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Bloquear clic derecho
    const disableContextMenu = (e: MouseEvent) => e.preventDefault();
    document.addEventListener('contextmenu', disableContextMenu);

    // Bloquear combinaciones de teclas
    const blockKeys = (e: KeyboardEvent) => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && ['I', 'C', 'J'].includes(e.key.toUpperCase())) ||
        (e.ctrlKey && e.key.toUpperCase() === 'U')
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener('keydown', blockKeys);

    return () => {
      document.removeEventListener('contextmenu', disableContextMenu);
      document.removeEventListener('keydown', blockKeys);
    };
  }, []);

  return <>{children}</>;
}
