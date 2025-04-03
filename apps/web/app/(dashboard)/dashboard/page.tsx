"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Avatar, AvatarFallback } from "@repo/ui/avatar"
import { Button } from "@repo/ui/button"
import { Card, CardContent } from "@repo/ui/card"
import { Badge } from "@repo/ui/badge"
import { Input } from "@repo/ui/input"
import { ReviewCard } from "@/components/review-card"
import { MetricCard } from "@/components/metric-card"
import { ProductsTable } from "@/components/products-table"
import { SentimentChart } from "@/components/sentiment-chart"
import { WeeklyTrendChart } from "@/components/weekly-trend-chart"
import { FilterButton } from "@/components/filter-button"
import { Pagination } from "@/components/pagination"
import { KeyInsights } from "@/components/key-insights"

export default function Home() {
    const [timeframe, setTimeframe] = useState<"week" | "month" | "year">("month")
  
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white border-b p-4">
          <div className="container mx-auto flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">Amazon Sentiment Analysis</h1>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input className="pl-10 w-80 bg-gray-50" placeholder="Search reviews..." />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-600">Welcome, Thairshan</span>
                <Avatar>
                  <AvatarFallback>TH</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </header>
  
        <main className="container mx-auto p-4 space-y-6">
          <Card>
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Amazon Reviews</h2>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="bg-green-50 text-green-600 hover:bg-green-100 hover:text-green-700"
                  >
                    Positive
                  </Button>
                  <Button variant="outline" className="bg-gray-100 text-gray-600 hover:bg-gray-200">
                    Neutral
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-orange-50 text-orange-600 hover:bg-orange-100 hover:text-orange-700"
                  >
                    Negative
                  </Button>
                </div>
              </div>
  
              <div className="flex flex-wrap gap-2">
                <FilterButton label="All Ratings" />
                <FilterButton label="All Divisions" />
                <FilterButton label="All Categories" />
                <FilterButton label="All Markets" />
              </div>
  
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <MetricCard title="Positive" value="856" className="bg-green-50 text-green-600" />
                <MetricCard title="Neutral" value="245" className="bg-gray-100 text-gray-600" />
                <MetricCard title="Negative" value="144" className="bg-orange-50 text-orange-600" />
              </div>
  
              <div className="space-y-4">
                <ReviewCard
                  product="Samsung 55&quot; QLED TV"
                  review="Absolutely love this TV! The picture quality is amazing and the smart features work flawlessly."
                  rating={5}
                  division="VD-TV"
                  market="UK"
                  date="2025-03-20"
                  sentiment="positive"
                />
  
                <ReviewCard
                  product="Samsung Galaxy S25"
                  review="Battery life is terrible. I have to charge it multiple times a day."
                  rating={2}
                  division="MX"
                  market="US"
                  date="2025-03-18"
                  sentiment="negative"
                />
  
                <ReviewCard
                  product="Samsung 65&quot; NEO QLED"
                  review="Best TV I have ever owned. The blacks are truly black and the brightness is incredible."
                  rating={5}
                  division="VD-TV"
                  market="FR"
                  date="2025-03-10"
                  sentiment="positive"
                />
              </div>
  
              <Pagination />
            </CardContent>
          </Card>
  
          <Card>
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Samsung Mood Metrics</h2>
              </div>
  
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <MetricCard title="Total Reviews" value="1,245" className="bg-blue-50 text-blue-600" />
                <MetricCard title="Sentiment Score" value="78.6%" className="bg-purple-50 text-purple-600" />
                <MetricCard title="Positive Reviews" value="856" className="bg-green-50 text-green-600" />
                <MetricCard title="Neutral Reviews" value="245" className="bg-gray-100 text-gray-600" />
                <MetricCard title="Negative Reviews" value="144" className="bg-orange-50 text-orange-600" />
                <MetricCard title="Volume Score" value="65.2%" className="bg-blue-50 text-blue-600" />
              </div>
            </CardContent>
          </Card>
  
          <Card>
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Top Products Leaderboard</h2>
                <div className="flex gap-3">
                  <Button variant="outline" className="text-black hover:bg-purple-700 p-2">
                    All Divisions
                  </Button>
                  <Button variant="outline" className="text-black hover:bg-purple-700 p-2" >VD-TV</Button>
                  <Button variant="outline" className="text-black hover:bg-purple-700 p-2">MX</Button>
                  <Button variant="outline" className="text-black hover:bg-purple-700 p-2">DA</Button>
                </div>
              </div>
  
              <ProductsTable />
  
              <div className="flex items-center justify-between mt-6">
                <h2 className="text-2xl font-semibold">Sentiment Trend</h2>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className={timeframe === "week" ? "text-black hover:bg-purple-700 p-2" : "p-2"}
                    onClick={() => setTimeframe("week")}
                  >
                    Week
                  </Button>
                  <Button
                    variant="outline"
                    className={timeframe === "month" ? "text-black hover:bg-purple-700 p-2" : "p-2"}
                    onClick={() => setTimeframe("month")}
                  >
                    Month
                  </Button>
                  <Button
                    variant="outline"
                    className={timeframe === "year" ? "text-black  hover:bg-purple-700 p-2" : "p-2"}
                    onClick={() => setTimeframe("year")}
                  >
                    Year
                  </Button>
                </div>
              </div>
  
              <WeeklyTrendChart timeframe={timeframe} />
            </CardContent>
          </Card>
  
          <Card>
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-semibold flex items-center gap-2">
                    Samsung Mood Metrics
                    <Badge variant="outline" className="bg-blue-50 text-blue-600 flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-zap"
                      >
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                      </svg>
                      AI Powered
                    </Badge>
                  </h2>
                  <p className="text-gray-500 text-sm">Real-time sentiment analysis & trend detection</p>
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className={timeframe === "week" ? "text-black hover:bg-purple-700 hover:text-white p-2" : "p-2"}
                    onClick={() => setTimeframe("week")}
                  >
                    Week
                  </Button>
                  <Button
                    variant="outline"
                    className={timeframe === "month" ? "text-black hover:bg-purple-700 hover:text-white p-2" : "p-2"}
                    onClick={() => setTimeframe("month")}
                  >
                    Month
                  </Button>
                  <Button
                    variant="outline"
                    className={timeframe === "year" ? "text-black hover:bg-purple-700 hover:text-white p-2" : "p-2"}
                    onClick={() => setTimeframe("year")}
                  >
                    Year
                  </Button>
                  <Button variant="outline" className = "text-black hover:bg-purple-700 hover:text-white p-2">Detailed View</Button>
                </div>
              </div>
  
              <Card className="bg-blue-50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                    <h3 className="text-xl font-semibold text-gray-800">Sentiment Trend Analysis</h3>
                  </div>
                  <SentimentChart timeframe={timeframe} />
                </CardContent>
              </Card>
  
              <Card className="bg-blue-50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 16v-4" />
                      <path d="M12 8h.01" />
                    </svg>
                    <h3 className="text-xl font-semibold text-gray-800">Key Insights</h3>
                  </div>
                  <KeyInsights />
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </main>
      </div>
    )
  }
  
  