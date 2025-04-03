"use client"
import { Checkbox } from "@repo/ui/checkbox"
import { Input } from "@repo/ui/input"
import { Button } from "@repo/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"
import type { FormEvent } from "react"

export default function LoginPage() {
  const router = useRouter()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault() 
    router.push("/home")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-purple-500 to-indigo-500">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Mood Metrics</h1>
          <p className="text-purple-500 text-lg">Listen, Measure & React</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="userId" className="text-gray-600">
              User ID
            </label>
            <Input id="userId" type="text" placeholder="Enter your User ID (e.g. TS001)" className="w-full" />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-gray-600">
              Password
            </label>
            <Input id="password" type="password" placeholder="Enter your password" className="w-full" />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <label htmlFor="remember" className="text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <Link href="#" className="text-sm text-purple-500 hover:text-purple-700">
              Forgot your password?
            </Link>
          </div>

          <Button type="submit" className="w-full bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5">
            Sign in
          </Button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button type="button" variant="outline" className="w-full">
              Samsung SSO
            </Button>
            <Button type="button" variant="outline" className="w-full">
              Corporate ID
            </Button>
          </div>
        </form>
      </div>

      <div className="absolute bottom-4 text-white text-sm">© 2025 Samsung Mood Metrics. All rights reserved.</div>
    </div>
  )
}

