import { useMemo } from "react";

const ParticleBackground = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 8}s`,
      duration: `${6 + Math.random() * 6}s`,
    }));
  }, []);

  const lines = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 80}%`,
      top: `${Math.random() * 100}%`,
      width: `${100 + Math.random() * 200}px`,
      rotation: `${Math.random() * 360}deg`,
      delay: `${Math.random() * 6}s`,
    }));
  }, []);

  return (
    <>
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{ left: p.left, top: p.top, animationDelay: p.delay, animationDuration: p.duration }}
          />
        ))}
        {lines.map((l) => (
          <div
            key={l.id}
            className="network-line"
            style={{
              left: l.left,
              top: l.top,
              width: l.width,
              transform: `rotate(${l.rotation})`,
              animationDelay: l.delay,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />
    </>
  );
};

export default ParticleBackground;
