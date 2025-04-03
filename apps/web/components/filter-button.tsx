import { Filter } from "lucide-react"
import { Button } from "@repo/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@repo/ui/dropdown-menu"

interface FilterButtonProps {
  label: string
}

export function FilterButton({ label }: FilterButtonProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="bg-gray-100 flex items-center gap-2 p-2">
          <Filter className="h-4 w-4" />
          {label}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white">
        {label === "All Divisions" && (
          <>
            <DropdownMenuItem className="font-medium border">All Divisions</DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-blue-600">VD-TV</DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-blue-600">VD-Monitors</DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-blue-600">MX</DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-blue-600">DA</DropdownMenuItem>
          </>
        )}
        {label === "All Categories" && (
          <>
            <DropdownMenuItem className="font-medium">All Categories</DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-blue-600">Television</DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-blue-600">Mobile</DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-blue-600">Monitor</DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-blue-600">Home Appliance</DropdownMenuItem>
          </>
        )}
        {label === "All Markets" && (
          <>
            <DropdownMenuItem className="font-medium">All Markets</DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-blue-600">UK</DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-blue-600"> US</DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-blue-600">Germany</DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-blue-600">France</DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-blue-600">Global</DropdownMenuItem>
          </>
        )}
        {label === "All Ratings" && (
          <>
            <DropdownMenuItem className="font-medium">All Ratings</DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-blue-600">5 Stars</DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-blue-600">4 Stars</DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-blue-600">3 Stars</DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-blue-600">2 Stars</DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-blue-600">1 Star</DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

