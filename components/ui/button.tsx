
"use client";

import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary";
  className?: string;
};

export function Button({
  variant = "default",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "px-4 py-2 rounded text-white font-mono transition-colors";

  const variantStyles =
    variant === "default"
      ? "bg-amber-700 hover:bg-amber-800"
      : "bg-gray-600 hover:bg-gray-700";

  return (
    <button
      {...props}
      className={`${baseStyles} ${variantStyles} ${className}`}
    />
  );
}
