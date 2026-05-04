import { useReducedMotion } from '../../hooks/useReducedMotion';

/**
 * Animated gradient background component
 * Creates a subtle shifting gradient effect that respects reduced motion preferences
 */
export function GradientBackground({ className = '' }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className={`absolute inset-0 -z-10 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Base gradient layer */}
      <div
        className={`absolute inset-0 opacity-30 ${
          prefersReducedMotion ? '' : 'animate-gradient-bg'
        }`}
        style={{
          background: `
            radial-gradient(ellipse at 20% 30%, rgba(102, 126, 234, 0.5) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(118, 75, 162, 0.4) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(240, 147, 251, 0.3) 0%, transparent 60%)
          `,
          backgroundSize: prefersReducedMotion ? '100% 100%' : '200% 200%',
        }}
      />

      {/* Animated mesh gradient */}
      {!prefersReducedMotion && (
        <>
          <div
            className="absolute inset-0 animate-mesh-1"
            style={{
              background: `
                radial-gradient(circle at 30% 40%, rgba(102, 126, 234, 0.2) 0%, transparent 50%)
              `,
            }}
          />
          <div
            className="absolute inset-0 animate-mesh-2"
            style={{
              background: `
                radial-gradient(circle at 70% 60%, rgba(118, 75, 162, 0.15) 0%, transparent 50%)
              `,
            }}
          />
          <div
            className="absolute inset-0 animate-mesh-3"
            style={{
              background: `
                radial-gradient(circle at 50% 80%, rgba(240, 147, 251, 0.12) 0%, transparent 50%)
              `,
            }}
          />
        </>
      )}

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(102, 126, 234, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(102, 126, 234, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
}
