export function Footer() {
  return (
    <footer 
      className="p-[24px_48px] border-t flex items-center justify-between"
      style={{
        borderColor: "var(--line)",
        background: "var(--black)",
      }}
    >
      <div 
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "10px",
          color: "var(--muted)",
          letterSpacing: "1px",
        }}
      >
        © 2012 Aditya Technology Partners. All rights reserved.
      </div>
      
      <div 
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "13px",
          color: "var(--orange)",
          letterSpacing: "3px",
        }}
      >
        Simplifying IT
      </div>
    </footer>
  );
}
