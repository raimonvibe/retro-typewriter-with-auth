import { LoginButton } from "@/components/login-button"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight">Sign in to your account</h2>
        </div>
        <div className="mt-8 space-y-6">
          <LoginButton />
        </div>
      </div>
    </div>
  )
}

