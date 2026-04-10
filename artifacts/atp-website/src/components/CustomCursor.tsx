import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <>
      <div 
        className="fixed w-[10px] h-[10px] rounded-full pointer-events-none z-[9999] mix-blend-screen transition-[width,height,opacity] duration-200"
        style={{
          background: 'var(--orange)',
          transform: `translate(calc(${position.x}px - 50%), calc(${position.y}px - 50%))`,
        }}
      />
      <div 
        className="fixed w-[36px] h-[36px] rounded-full pointer-events-none z-[9998] transition-[transform,width,height] duration-[0.15s,0.25s,0.25s] ease-[ease,ease,ease]"
        style={{
          border: '1px solid rgba(247,148,29,0.4)',
          transform: `translate(calc(${position.x}px - 50%), calc(${position.y}px - 50%))`,
        }}
      />
    </>
  );
}
