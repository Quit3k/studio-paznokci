// src/hooks/useWindowSize.ts
import { useState, useEffect } from 'react';

// Ten hook zwraca `true`, jeśli szerokość ekranu jest mniejsza niż 768px (czyli "mobilna").
// W przeciwnym razie zwraca `false`.
export function useWindowSize() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener('resize', handleResize);
    // Ważne: sprzątamy po sobie, usuwając nasłuchiwanie, gdy komponent zniknie
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Pusta tablica sprawia, że ten efekt uruchamia się tylko raz

  return isMobile;
}