
"use client";

import * as React from "react";

type AvatarProps = {
  children: React.ReactNode;
  className?: string;
};

type AvatarImageProps = {
  src: string;
  alt: string;
  className?: string;
};

type AvatarFallbackProps = {
  children: React.ReactNode;
  className?: string;
};

export function Avatar({ children, className }: AvatarProps) {
  return (
    <div
      className={`relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 overflow-hidden ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

export function AvatarImage({ src, alt, className }: AvatarImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={`h-full w-full object-cover ${className ?? ""}`}
    />
  );
}

export function AvatarFallback({ children, className }: AvatarFallbackProps) {
  return (
    <span
      className={`text-sm font-medium text-gray-600 select-none ${className ?? ""}`}
    >
      {children}
    </span>
  );
}
