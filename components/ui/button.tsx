
"use client";

import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
};

export function Button({
  variant = "default",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles = "rounded font-mono transition-colors";
  const variantStyles =
    variant === "default"
      ? "bg-amber-700 hover:bg-amber-800 text-white"
      : variant === "secondary"
      ? "bg-gray-600 hover:bg-gray-700 text-white"
      : "border border-amber-700 text-amber-700 hover:bg-amber-100/10";

  const sizeStyles =
    size === "sm"
      ? "px-3 py-1 text-sm"
      : size === "lg"
      ? "px-5 py-3 text-lg"
      : "px-4 py-2 text-base";

  return (
    <button
      {...props}
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
    />
  );
}
