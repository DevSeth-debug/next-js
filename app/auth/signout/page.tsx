import { signOut } from "@/auth"

export default function SignOutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      <div className="relative max-w-md w-full mx-4">
        {/* Background decorative elements */}
        <div className="absolute -top-12 -left-12 w-24 h-24 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full opacity-20 blur-2xl animate-pulse"></div>
        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full opacity-20 blur-2xl animate-pulse delay-300"></div>
        
        {/* Main card */}
        <div className="relative backdrop-blur-sm bg-white/80 p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20">
          <div className="text-center">
            {/* Icon */}
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 text-white">
              <svg 
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </div>

            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
              Sign Out
            </h2>
            <p className="text-gray-600 mb-8">
              Are you sure you want to end your current session?
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <form
                className="w-full sm:w-auto"
                action={async () => {
                  "use server"
                  await signOut({ redirectTo: "/" })
                }}
              >
                <button
                  type="submit"
                  className="w-full sm:w-auto group relative inline-flex items-center justify-center px-8 py-3 font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl overflow-hidden transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-lg"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out"></span>
                  <span className="relative flex items-center gap-2">
                    Sign out
                    <svg 
                      className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </form>
              
              <a
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 font-medium text-gray-700 bg-white border-2 border-gray-200 rounded-xl hover:bg-gray-50 hover:border-purple-100 transition-all duration-200 ease-in-out hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                  </svg>
                  Cancel
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}