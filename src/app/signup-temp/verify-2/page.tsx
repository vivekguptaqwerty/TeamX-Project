"use client"
import { Button } from "@/components/Button"
import { Card } from "@/components/Card"
import Navbar from "@/components/Navbar"
import { useRouter } from "next/navigation" // Import useRouter

export default function VerifyIdentity() {
  const router = useRouter() // Initialize the router

  const handleNextClick = () => {
    router.push("/signup/verify-3") // Redirect to signup/verify-3
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar home="Verification" />

      {/* Main Content */}
      <main className="px-4 pt-12 flex flex-col gap-8">
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold text-center">Verify Identity</h1>
          <p className="text-gray-400 text-center text-sm">
            Confirm your country of residence to learn how your personal data will be processed
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center items-center gap-4">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            <div className="w-16 h-1 bg-emerald-500"></div>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            <div className="w-16 h-1 bg-emerald-500"></div>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-gray-700"></div>
            <div className="w-16 h-1 bg-gray-700"></div>
          </div>
        </div>

        {/* Upload Section */}
        <div className="space-y-4">
          <h2 className="text-sm">Upload more than 2 documents:</h2>
          <div className="space-y-3">
            <Card className="bg-zinc-900 border-zinc-800">
              <Button variant="ghost" className="w-full justify-start text-gray-400 py-6">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 mr-3">
                  <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2" />
                  <path d="M12 8v8M8 12h8" strokeWidth="2" />
                </svg>
                ID or Driver licence
              </Button>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800">
              <Button variant="ghost" className="w-full justify-start text-gray-400 py-6">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 mr-3">
                  <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2" />
                  <path d="M12 8v8M8 12h8" strokeWidth="2" />
                </svg>
                Bank Documents
              </Button>
            </Card>
          </div>
        </div>

        {/* Next Button */}
        <Button
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-6 rounded-xl"
          onClick={handleNextClick} // Add onClick to handle redirection
        >
          Next
        </Button>
      </main>
    </div>
  )
}
