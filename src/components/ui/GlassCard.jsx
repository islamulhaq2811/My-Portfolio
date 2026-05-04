export function GlassCard({ children, className = '', hover = false }) {
  return (
    <div
      className={`glass-card ${hover ? 'glow-hover' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
