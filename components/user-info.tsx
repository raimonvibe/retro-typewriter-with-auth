"use client"

import { useSession, signOut } from "next-auth/react"


export function UserInfo() {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <div>Loading...</div>
  }

  if (status === "unauthenticated") {
    return <div>Not signed in</div>
  }

  return (
   <div className="animate-fade-in w-full max-w-xs md:max-w-sm bg-gray-950/80 text-yellow-200 p-4 md:p-5 border border-yellow-500 shadow-[0_0_12px_rgba(255,193,7,0.2)] rounded-md backdrop-blur-sm mx-auto">
      <div className="mb-4">
        <p>
          <strong className="text-yellow-400">Name:</strong>{' '}
          <span className="typewriter-text">{session?.user?.name}</span>
        </p>
        <p>
          <strong className="text-yellow-400">Email:</strong>{' '}
          <span className="typewriter-text">{session?.user?.email}</span>
        </p>
      </div>
      <button
        onClick={() => signOut()}
        className="bg-amber-500 hover:bg-amber-600 text-black px-4 py-2 rounded font-mono transition-colors"
      >
        Sign out
      </button>
    </div>
  )
}

