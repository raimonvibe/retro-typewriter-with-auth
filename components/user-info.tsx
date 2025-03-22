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
    <div className="p-4 bg-gray-100 rounded-lg">
      <div className="mb-4">
        <p>
          <strong>Name:</strong> {session?.user?.name}
        </p>
        <p>
          <strong>Email:</strong> {session?.user?.email}
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

