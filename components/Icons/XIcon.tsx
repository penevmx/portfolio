// XIcon.tsx
import React from "react";

const XIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M16.24 2.56a1 1 0 0 0-.31.17l-4.93 3.92l-4.92-3.92a1 1 0 0 0-1.42 1.42L9.57 8L4.7 12.76a1 1 0 0 0 1.42 1.42l4.85-3.88l4.84 3.88a1 1 0 0 0 1.42-1.42L14.43 8l4.87-4.85a1 1 0 0 0-1.06-1.59z"
    />
  </svg>
);

export default XIcon;
