import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@repo/ui/button"

export function Pagination() {
  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      <Button variant="outline" size="icon" className="h-8 w-8">
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="sm" className="h-8 w-8 bg-purple-600 text-white">
        1
      </Button>
      <Button variant="outline" size="sm" className="h-8 w-8">
        2
      </Button>
      <Button variant="outline" size="sm" className="h-8 w-8">
        3
      </Button>
      <Button variant="outline" size="sm" className="h-8 w-8">
        4
      </Button>
      <Button variant="outline" size="icon" className="h-8 w-8">
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}

