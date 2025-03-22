import { ProtectedClient } from "@/components/protected-client"

export default function DashboardPage() {
  return (
    <ProtectedClient>
      <div className="container mx-auto py-10">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p>This is a protected page. You can only see this if you're logged in.</p>
      </div>
    </ProtectedClient>
  )
}

