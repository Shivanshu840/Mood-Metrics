import { BarChart3 } from "lucide-react"
import { Button } from "@repo/ui/button"

export function DashboardContent() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="rounded-lg border bg-white p-8 shadow-sm">
        <h1 className="mb-6 text-2xl font-bold">Amazon Dashboard Content</h1>
        <p className="mb-8 text-gray-600">
          This area will display the sentiment analysis data for the selected platform.
        </p>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <BarChart3 className="mr-2 h-4 w-4" />
          View Dashboard
        </Button>
      </div>
    </div>
  )
}

