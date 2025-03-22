// components/ui/button.tsx
"use client";

import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary";
};

export function Button({ className, variant = "default", ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        "px-4 py-2 rounded text-white font-mono transition-colors",
        variant === "default" ? "bg-amber-700 hover:bg-amber-800" : "bg-gray-600 hover:bg-gray-700",
        className
      )}
    />
  );
}