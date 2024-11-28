"use client";
import React, { useRef, useEffect, useState } from "react";

export const TextHoverEffect = ({
  text,
  duration = 0.5,
}: {
  text: string;
  duration?: number;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (svgRef.current) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className="select-none"
    >
      <defs>
        {/* Gradients */}
        <linearGradient id="textGradientLight" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#5A67D8" />
          <stop offset="33%" stopColor="#667EEA" />
          <stop offset="66%" stopColor="#EBF4FF" />
          <stop offset="100%" stopColor="#4A5568" />
        </linearGradient>
        <linearGradient id="textGradientDark" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4A5568" />
          <stop offset="100%" stopColor="#2D3748" />
        </linearGradient>

        {/* Reveal Mask */}
        <radialGradient
          id="revealMask"
          cx={maskPosition.cx}
          cy={maskPosition.cy}
          r="15%"
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </radialGradient>
        <mask id="textMask">
          <rect width="100%" height="100%" fill="url(#revealMask)" />
        </mask>
      </defs>

      {/* Texte principal */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradientLight)"
        strokeWidth="0.3"
        mask="url(#textMask)"
        className="font-[helvetica] font-bold fill-transparent text-7xl dark:stroke-neutral-600"
      >
        {text}
      </text>

      {/* Bordures légères en Light Mode */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="rgba(0, 0, 0, 0.08)" /* Discret pour le Light Mode */
        strokeWidth="0.2"
        className="font-[helvetica] font-bold fill-transparent text-7xl dark:hidden"
      >
        {text}
      </text>

      {/* Bordures légères en Dark Mode */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="rgba(255, 255, 255, 0.18)" /* Discret pour le Dark Mode */
        strokeWidth="0.2"
        className="font-[helvetica] font-bold fill-transparent text-7xl hidden dark:block"
      >
        {text}
      </text>
    </svg>
  );
};
