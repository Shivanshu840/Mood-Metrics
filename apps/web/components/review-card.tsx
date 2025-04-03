import { Star } from "lucide-react"
import { Card, CardContent } from "@repo/ui/card"

interface ReviewCardProps {
  product: string
  review: string
  rating: number
  division: string
  market: string
  date: string
  sentiment: "positive" | "negative" | "neutral"
}

export function ReviewCard({ product, review, rating, division, market, date, sentiment }: ReviewCardProps) {
  const sentimentColor = {
    positive: "text-green-500",
    negative: "text-orange-500",
    neutral: "text-gray-500",
  }

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <span
              className={`w-4 h-4 rounded-full ${sentiment === "positive" ? "bg-green-500" : sentiment === "negative" ? "bg-orange-500" : "bg-gray-500"}`}
            ></span>
            <h3 className="text-lg font-semibold">{product}</h3>
          </div>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-5 h-5 ${i < rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}`} />
            ))}
          </div>
        </div>
        <p className="mt-2 text-gray-600">{review}</p>
        <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span>{division}</span>
            <span>•</span>
            <span>{market}</span>
          </div>
          <span>{date}</span>
        </div>
      </CardContent>
    </Card>
  )
}

