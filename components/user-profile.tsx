"use client"

import { useSession, signOut } from "next-auth/react"
import { LoginButton } from "@/components/login-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function UserProfile() {
  const { data: session } = useSession()

  if (!session) {
    return null
  }

  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src={session.user?.image || ""} alt={session.user?.name || "User"} />
        <AvatarFallback>{session.user?.name?.charAt(0) || "U"}</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-sm font-medium">{session.user?.name}</p>
        <p className="text-xs text-muted-foreground">{session.user?.email}</p>
      </div>
      <Button variant="outline" size="sm" onClick={() => signOut({ callbackUrl: "/login" })}>
        Sign out
      </Button>
    </div>
  )
}

