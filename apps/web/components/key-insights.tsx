import { ArrowUpRight, ArrowDownRight } from "lucide-react"

export function KeyInsights() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Overall Sentiment</span>
          <div className="flex items-center gap-1 text-green-500">
            <span>78.6%</span>
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-green-500 rounded-full" style={{ width: "78.6%" }}></div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Reviews Today</span>
          <div className="flex items-center gap-1 text-blue-500">
            <span>1,245</span>
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-blue-500 rounded-full" style={{ width: "75%" }}></div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Volume Score</span>
          <div className="flex items-center gap-1 text-orange-500">
            <span>65.2%</span>
            <ArrowDownRight className="h-4 w-4" />
          </div>
        </div>
        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-orange-500 rounded-full" style={{ width: "65.2%" }}></div>
        </div>
      </div>
    </div>
  )
}

