interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

const sizes = {
  sm: { svg: 32, text: "text-sm" },
  md: { svg: 40, text: "text-lg" },
  lg: { svg: 48, text: "text-xl" },
};

const Logo = ({ className = "", size = "md", showText = true }: LogoProps) => {
  const s = sizes[size];

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width={s.svg}
        height={s.svg}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* Background circle */}
        <circle cx="32" cy="32" r="30" fill="hsl(201 100% 36%)" opacity="0.15" />
        <circle cx="32" cy="32" r="30" stroke="hsl(201 100% 36%)" strokeWidth="1.5" opacity="0.4" />
        
        {/* First A */}
        <path
          d="M16 46L24 18H28L36 46H32.5L30.5 39H21.5L19.5 46H16ZM22.5 36H29.5L26 24L22.5 36Z"
          fill="hsl(201 100% 36%)"
        />
        
        {/* Second A */}
        <path
          d="M30 46L38 18H42L50 46H46.5L44.5 39H35.5L33.5 46H30ZM36.5 36H43.5L40 24L36.5 36Z"
          fill="hsl(0 0% 100%)"
          opacity="0.9"
        />
        
        {/* Accent line */}
        <rect x="16" y="48" width="34" height="1.5" rx="0.75" fill="hsl(201 100% 36%)" opacity="0.6" />
      </svg>
      
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`font-bold tracking-wide text-foreground ${s.text}`}>
            AA INNOVATIONS
          </span>
          <span className="text-[9px] tracking-[0.25em] uppercase text-primary/70 mt-0.5">
            Always Ahead
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
