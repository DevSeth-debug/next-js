import { signIn } from "@/auth"

async function handleSignIn() {
  "use server"
  await signIn("oidc-provider")
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-4">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-1/2 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-1/4 left-1/3 w-1/2 h-1/2 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Main content */}
      <div className="relative w-full max-w-md">
        <div className="relative backdrop-blur-sm bg-white/80 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20 p-8">
          <div className="space-y-8">
            {/* Logo/Icon */}
            <div className="flex justify-center">
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 p-1 shadow-lg">
                <div className="absolute inset-0 rounded-full bg-white/90 m-0.5"></div>
                <div className="absolute inset-0 rounded-full flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-indigo-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Header */}
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Welcome Back
              </h1>
              <p className="text-gray-500">
                Sign in to access your account
              </p>
            </div>

            {/* Sign in form */}
            <form action={handleSignIn} className="mt-8 space-y-6">
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 ease-in-out hover:scale-[1.02] shadow-md"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      className="h-5 w-5 text-indigo-300 group-hover:text-indigo-200 transition-colors duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                      />
                    </svg>
                  </span>
                  Sign in with OIDC
                </button>
              </div>
            </form>

            {/* Additional info */}
            <div className="mt-4 text-center text-sm text-gray-500">
              <p>By signing in, you agree to our</p>
              <div className="space-x-1">
                <a href="#" className="text-indigo-600 hover:text-indigo-500">Terms of Service</a>
                <span>&middot;</span>
                <a href="#" className="text-indigo-600 hover:text-indigo-500">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}