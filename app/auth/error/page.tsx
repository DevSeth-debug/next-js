"use client"

import { useSearchParams } from "next/navigation"

export default function ErrorPage() {
  const searchParams = useSearchParams()
  const error = searchParams.get("error")

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-4 rounded-lg p-6 shadow-lg">
        <h1 className="text-2xl font-bold text-center text-red-600">Authentication Error</h1>
        <div className="p-4 rounded bg-red-50 border border-red-200">
          <p className="text-red-800">{error || "An error occurred during authentication"}</p>
        </div>
        <a
          href="/auth/signin"
          className="block w-full text-center py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Try Again
        </a>
      </div>
    </div>
  )
} 