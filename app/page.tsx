import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { LoginButton } from "@/components/login-button"
import { UserInfo } from "@/components/user-info"
import dynamic from "next/dynamic"

const RetroMonitor = dynamic(() => import("@/components/RetroMonitor"), { ssr: false })

export default async function Page() {
  const session = await getServerSession(authOptions)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-8 bg-black text-white">
      {!session ? (
        <div className="w-full max-w-md space-y-8 text-center">
          <h1 className="text-3xl font-bold">Welcome to Retro Typewriter</h1>
          <p className="mt-2 text-muted-foreground">Sign in with Google to get started</p>
          <div className="mt-6">
            <LoginButton />
          </div>
        </div>
      ) : (
        <div className="w-full">
          <UserInfo />
          <RetroMonitor />
        </div>
      )}
    </main>
  )
}
