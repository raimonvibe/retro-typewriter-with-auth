// components/ui/avatar.tsx
"use client";

type AvatarProps = {
  name: string;
  image?: string;
};

export function Avatar({ name, image }: AvatarProps) {
  return (
    <div className="flex items-center gap-2">
      {image ? (
        <img
          src={image}
          alt={name}
          className="w-8 h-8 rounded-full object-cover"
        />
      ) : (
        <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold">
          {name.charAt(0).toUpperCase()}
        </div>
      )}
      <span className="text-sm text-white">{name}</span>
    </div>
  );
}