"use client"

import { useEffect, useRef } from "react"

interface SentimentChartProps {
  timeframe?: "week" | "month" | "year"
}

export function SentimentChart({ timeframe = "month" }: SentimentChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const ctx = canvasRef.current.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvasRef.current.width = canvasRef.current.offsetWidth
    canvasRef.current.height = 300

    // Chart dimensions
    const width = canvasRef.current.width
    const height = canvasRef.current.height
    const padding = 40

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Set up chart area
    const chartWidth = width - padding * 2
    const chartHeight = height - padding * 2

    // Draw grid lines - dotted style
    ctx.strokeStyle = "#e5e7eb"
    ctx.lineWidth = 1

    // Horizontal grid lines - dotted
    for (let i = 0; i <= 4; i++) {
      const y = padding + chartHeight * (i / 4)

      // Create dotted lines
      ctx.setLineDash([3, 3])
      ctx.beginPath()
      ctx.moveTo(padding, y)
      ctx.lineTo(width - padding, y)
      ctx.stroke()

      // Y-axis labels (left)
      ctx.fillStyle = "#6b7280"
      ctx.font = "12px sans-serif"
      ctx.textAlign = "right"
      ctx.fillText(`${100 - i * 25}`, padding - 10, y + 4)

      // Y-axis labels (right)
      ctx.textAlign = "left"
      ctx.fillText(`${7000 - i * 1750}`, width - padding + 10, y + 4)
    }

    // Reset line dash for other elements
    ctx.setLineDash([])

    // X-axis labels based on timeframe
    let labels: string[] = []

    if (timeframe === "week") {
      labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    } else if (timeframe === "month") {
      labels = ["Week 1", "Week 2", "Week 3", "Week 4"]
    } else if (timeframe === "year") {
      labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    }

    const xStep = chartWidth / (labels.length - 1)

    // Vertical grid lines - dotted
    for (let i = 0; i < labels.length; i++) {
      const x = padding + xStep * i

      // Create dotted lines
      ctx.setLineDash([3, 3])
      ctx.beginPath()
      ctx.moveTo(x, padding)
      ctx.lineTo(x, height - padding)
      ctx.stroke()

      // X-axis labels
      ctx.fillStyle = "#6b7280"
      ctx.font = "14px sans-serif"
      ctx.textAlign = "center"
      ctx.fillText(labels[i], x, height - padding / 2 + 5)
    }

    // Reset line dash for other elements
    ctx.setLineDash([])

    // Data points based on timeframe
    let sentimentData: number[] = []
    let volumeData: number[] = []

    if (timeframe === "week") {
      sentimentData = [72, 75, 70, 78, 80, 76, 74]
      volumeData = [4200, 4500, 4300, 4800, 5000, 4600, 4400]
    } else if (timeframe === "month") {
      sentimentData = [70, 75, 60, 80]
      volumeData = [4500, 5000, 4800, 4700]
    } else if (timeframe === "year") {
      sentimentData = [65, 70, 78, 70, 82, 90, 98, 95, 88, 85, 78, 75]
      volumeData = [4000, 4500, 5000, 4800, 5500, 6000, 6800, 6500, 6000, 5800, 5200, 5000]
    }

    // Draw sentiment score area
    const gradient = ctx.createLinearGradient(0, padding, 0, height - padding)
    gradient.addColorStop(0, "rgba(109, 40, 217, 0.1)")
    gradient.addColorStop(1, "rgba(109, 40, 217, 0)")

    ctx.fillStyle = gradient
    ctx.beginPath()
    ctx.moveTo(padding, height - padding)

    sentimentData.forEach((value, i) => {
      const x = padding + xStep * i
      const y = padding + chartHeight * (1 - value / 100)
      ctx.lineTo(x, y)
    })

    ctx.lineTo(width - padding, height - padding)
    ctx.closePath()
    ctx.fill()

    // Draw sentiment score line
    ctx.strokeStyle = "#8b5cf6"
    ctx.lineWidth = 2
    ctx.beginPath()

    sentimentData.forEach((value, i) => {
      const x = padding + xStep * i
      const y = padding + chartHeight * (1 - value / 100)
      if (i === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    })

    ctx.stroke()

    // Draw volume line
    ctx.strokeStyle = "#06b6d4"
    ctx.lineWidth = 2
    ctx.beginPath()

    volumeData.forEach((value, i) => {
      const x = padding + xStep * i
      const y = padding + chartHeight * (1 - value / 7000)
      if (i === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    })

    ctx.stroke()

    // Draw sentiment points
    sentimentData.forEach((value, i) => {
      const x = padding + xStep * i
      const y = padding + chartHeight * (1 - value / 100)

      ctx.fillStyle = "#ffffff"
      ctx.beginPath()
      ctx.arc(x, y, 5, 0, Math.PI * 2)
      ctx.fill()

      ctx.strokeStyle = "#8b5cf6"
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(x, y, 5, 0, Math.PI * 2)
      ctx.stroke()
    })

    // Draw volume points
    volumeData.forEach((value, i) => {
      const x = padding + xStep * i
      const y = padding + chartHeight * (1 - value / 7000)

      ctx.fillStyle = "#ffffff"
      ctx.beginPath()
      ctx.arc(x, y, 5, 0, Math.PI * 2)
      ctx.fill()

      ctx.strokeStyle = "#06b6d4"
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(x, y, 5, 0, Math.PI * 2)
      ctx.stroke()
    })

    // Draw tooltip for a specific point based on timeframe
    let tooltipIndex = 1 // Default to Week 2 for month view
    if (timeframe === "week") tooltipIndex = 2 // Wednesday for week view
    if (timeframe === "year") tooltipIndex = 6 // July for year view

    const tooltipX = padding + xStep * tooltipIndex
    const tooltipY = padding + chartHeight * (1 - sentimentData[tooltipIndex] / 100)

    // Vertical line for tooltip
    ctx.strokeStyle = "#e5e7eb"
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(tooltipX, padding)
    ctx.lineTo(tooltipX, height - padding)
    ctx.stroke()

    // Tooltip background
    ctx.fillStyle = "#ffffff"
    ctx.beginPath()
    ctx.roundRect(tooltipX + 10, tooltipY - 40, 140, 80, 5)
    ctx.fill()
    ctx.strokeStyle = "#e5e7eb"
    ctx.lineWidth = 1
    ctx.stroke()

    // Tooltip content
    ctx.fillStyle = "#111827"
    ctx.font = "bold 16px sans-serif"
    ctx.textAlign = "left"
    ctx.fillText(labels[tooltipIndex], tooltipX + 20, tooltipY - 15)

    ctx.font = "14px sans-serif"
    ctx.fillStyle = "#8b5cf6"
    ctx.textAlign = "left"
    ctx.fillText(`Sentiment: ${sentimentData[tooltipIndex]}%`, tooltipX + 20, tooltipY + 10)

    ctx.fillStyle = "#06b6d4"
    ctx.fillText(`Volume: ${volumeData[tooltipIndex]}`, tooltipX + 20, tooltipY + 30)

    // Legend at the bottom
    const legendY = height - 10

    // Sentiment legend
    ctx.strokeStyle = "#8b5cf6"
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(padding, legendY)
    ctx.lineTo(padding + 20, legendY)
    ctx.stroke()

    ctx.fillStyle = "#ffffff"
    ctx.beginPath()
    ctx.arc(padding + 10, legendY, 4, 0, Math.PI * 2)
    ctx.fill()
    ctx.strokeStyle = "#8b5cf6"
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.arc(padding + 10, legendY, 4, 0, Math.PI * 2)
    ctx.stroke()

    ctx.fillStyle = "#8b5cf6"
    ctx.font = "14px sans-serif"
    ctx.textAlign = "left"
    ctx.fillText("Sentiment Score", padding + 30, legendY + 4)

    // Volume legend
    const volLegendX = padding + 180
    ctx.strokeStyle = "#06b6d4"
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(volLegendX, legendY)
    ctx.lineTo(volLegendX + 20, legendY)
    ctx.stroke()

    ctx.fillStyle = "#ffffff"
    ctx.beginPath()
    ctx.arc(volLegendX + 10, legendY, 4, 0, Math.PI * 2)
    ctx.fill()
    ctx.strokeStyle = "#06b6d4"
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.arc(volLegendX + 10, legendY, 4, 0, Math.PI * 2)
    ctx.stroke()

    ctx.fillStyle = "#06b6d4"
    ctx.font = "14px sans-serif"
    ctx.textAlign = "left"
    ctx.fillText("Review Volume", volLegendX + 30, legendY + 4)
  }, [timeframe])

  return (
    <div className="relative h-[300px] w-full">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}

