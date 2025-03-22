
"use client";

import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function UserProfile() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p className="text-sm text-muted-foreground">Loading...</p>;
  }

  if (!session?.user) {
    return null;
  }

  const { name, email, image } = session.user;

  return (
    <div className="flex items-center gap-4 p-4 border rounded-md bg-black text-amber-300">
      <Avatar>
        {image ? (
          <AvatarImage src={image} alt={name || "User"} />
        ) : (
          <AvatarFallback>{name?.charAt(0) || "U"}</AvatarFallback>
        )}
      </Avatar>
      <div className="flex flex-col">
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-muted-foreground">{email}</p>
      </div>
      <Button
        variant="outline"
        size="sm"
        onClick={() => signOut({ callbackUrl: "/login" })}
      >
        Sign out
      </Button>
    </div>
  );
}
