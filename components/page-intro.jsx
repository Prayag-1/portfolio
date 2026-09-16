"use client";

export default function PageIntro({ children, className = "" }) {
  const sections = Array.isArray(children) ? children : [children];

  return (
    <div className={className} suppressHydrationWarning>
      {sections.map((child, index) => (
        <div className="intro-section" key={child?.key || index} suppressHydrationWarning>
          {child}
        </div>
      ))}
    </div>
  );
}
