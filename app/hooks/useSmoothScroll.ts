import { useEffect } from 'react';

export const useSmoothScroll = () => {
  const scrollTo = (target: string) => {
    // Mencegah default behavior
    const targetElement = document.querySelector(target);
    if (!targetElement) return;

    // Menggunakan window.__lenis untuk mengakses instance Lenis
    if (window.__lenis) {
      window.__lenis.scrollTo(targetElement, {
        offset: -100, // Offset dari top untuk menyesuaikan dengan header
        duration: 1.5, // Durasi animasi dalam detik
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) // Easing function yang sama dengan layout
      });
    }
  };

  useEffect(() => {
    // Menangani klik pada semua link internal
    const handleLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        scrollTo(href);
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  return { scrollTo };
};

// Extend Window interface untuk TypeScript
declare global {
  interface Window {
    __lenis: any;
  }
} 