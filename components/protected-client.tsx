"use client"

import type React from "react"

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"

export function ProtectedClient({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <div>Loading...</div>
  }

  if (status === "unauthenticated") {
    redirect("/login")
  }

  return <>{children}</>
}

