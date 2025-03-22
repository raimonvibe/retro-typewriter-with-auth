"use client"

import { useSession } from "next-auth/react"
import { LoginButton } from "@/components/login-button"
import { UserInfo } from "@/components/user-info"
import RetroMonitor from "@/components/RetroMonitor"

export default function PageClient() {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <p className="font-mono text-amber-300">Loading...</p>
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-black text-white">
      {!session ? (
        <div className="w-full max-w-md space-y-8 text-center">
          <h1 className="text-3xl font-bold">Welcome to Retro Typewriter</h1>
          <p className="text-muted-foreground mt-2">Sign in with Google to get started</p>
          <div className="mt-6">
            <LoginButton />
          </div>
        </div>
      ) : (
        <div className="w-full space-y-6">
          <UserInfo />
          <RetroMonitor />
        </div>
      )}
    </main>
  )
}
