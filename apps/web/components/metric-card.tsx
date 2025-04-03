import { Card, CardContent } from "@repo/ui/card"

interface MetricCardProps {
  title: string
  value: string
  className?: string
}

export function MetricCard({ title, value, className = "" }: MetricCardProps) {
  return (
    <Card className={`overflow-hidden ${className}`}>
      <CardContent className="p-6 flex flex-col items-center justify-center">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-4xl font-bold mt-2">{value}</p>
      </CardContent>
    </Card>
  )
}

