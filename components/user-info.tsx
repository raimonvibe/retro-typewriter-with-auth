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
    <div className="w-full max-w-sm md:max-w-md bg-gray-900 text-yellow-300 p-4 md:p-6 border-2 border-yellow-500 shadow-[0_0_20px_4px_rgba(255,193,7,0.15)] rounded-lg mx-auto md:mx-0 md:absolute md:top-6 md:right-6 z-50">
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

