import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-900 dark:text-white">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mt-4">Page Not Found</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-md">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Button asChild className="bg-green-600 hover:bg-green-700">
            <Link href="/">Back to Dashboard</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
