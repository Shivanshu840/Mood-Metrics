"use client"

import { useEffect, useRef } from "react"

interface WeeklyTrendChartProps {
  timeframe?: "week" | "month" | "year"
}

export function WeeklyTrendChart({ timeframe = "month" }: WeeklyTrendChartProps) {
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

      // Y-axis labels
      ctx.fillStyle = "#6b7280"
      ctx.font = "12px sans-serif"
      ctx.textAlign = "right"
      ctx.fillText(`${80 - i * 20}`, padding - 10, y + 4)
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
      labels = ["Q1", "Q2", "Q3", "Q4"]
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
    let positiveData: number[] = []
    let negativeData: number[] = []
    let neutralData: number[] = []

    if (timeframe === "week") {
      positiveData = [60, 65, 70, 68, 72, 75, 70]
      negativeData = [25, 20, 15, 18, 16, 14, 20]
      neutralData = [15, 15, 15, 14, 12, 11, 10]
    } else if (timeframe === "month") {
      positiveData = [70, 75, 60, 80]
      negativeData = [15, 12, 25, 10]
      neutralData = [20, 18, 15, 15]
    } else if (timeframe === "year") {
      positiveData = [60, 72, 68, 75]
      negativeData = [25, 18, 22, 15]
      neutralData = [15, 10, 10, 10]
    }

    // Draw positive line
    ctx.strokeStyle = "#22c55e"
    ctx.lineWidth = 2
    ctx.beginPath()
    positiveData.forEach((value, i) => {
      const x = padding + xStep * i
      const y = padding + chartHeight * (1 - value / 100)
      if (i === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    })
    ctx.stroke()

    // Draw negative line
    ctx.strokeStyle = "#f97316"
    ctx.lineWidth = 2
    ctx.beginPath()
    negativeData.forEach((value, i) => {
      const x = padding + xStep * i
      const y = padding + chartHeight * (1 - value / 100)
      if (i === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    })
    ctx.stroke()

    // Draw neutral line
    ctx.strokeStyle = "#9ca3af"
    ctx.lineWidth = 2
    ctx.beginPath()
    neutralData.forEach((value, i) => {
      const x = padding + xStep * i
      const y = padding + chartHeight * (1 - value / 100)
      if (i === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    })
    ctx.stroke()

    // Draw positive points
    positiveData.forEach((value, i) => {
      const x = padding + xStep * i
      const y = padding + chartHeight * (1 - value / 100)

      // White fill with colored border
      ctx.fillStyle = "#ffffff"
      ctx.beginPath()
      ctx.arc(x, y, 5, 0, Math.PI * 2)
      ctx.fill()

      ctx.strokeStyle = "#22c55e"
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(x, y, 5, 0, Math.PI * 2)
      ctx.stroke()
    })

    // Draw negative points
    negativeData.forEach((value, i) => {
      const x = padding + xStep * i
      const y = padding + chartHeight * (1 - value / 100)

      ctx.fillStyle = "#ffffff"
      ctx.beginPath()
      ctx.arc(x, y, 5, 0, Math.PI * 2)
      ctx.fill()

      ctx.strokeStyle = "#f97316"
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(x, y, 5, 0, Math.PI * 2)
      ctx.stroke()
    })

    // Draw neutral points
    neutralData.forEach((value, i) => {
      const x = padding + xStep * i
      const y = padding + chartHeight * (1 - value / 100)

      ctx.fillStyle = "#ffffff"
      ctx.beginPath()
      ctx.arc(x, y, 5, 0, Math.PI * 2)
      ctx.fill()

      ctx.strokeStyle = "#9ca3af"
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(x, y, 5, 0, Math.PI * 2)
      ctx.stroke()
    })

    // Draw tooltip for Week 3 (matching the image)
    const tooltipIndex = 2 // Week 3 (index 2)
    const tooltipX = padding + xStep * tooltipIndex
    const tooltipY = padding + chartHeight * (1 - positiveData[tooltipIndex] / 100)

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
    ctx.roundRect(tooltipX + 10, tooltipY - 50, 120, 80, 5)
    ctx.fill()
    ctx.strokeStyle = "#e5e7eb"
    ctx.lineWidth = 1
    ctx.stroke()

    // Tooltip content
    ctx.fillStyle = "#111827"
    ctx.font = "bold 16px sans-serif"
    ctx.textAlign = "left"
    ctx.fillText("Week 3", tooltipX + 20, tooltipY - 25)

    ctx.font = "14px sans-serif"
    ctx.fillStyle = "#22c55e"
    ctx.textAlign = "left"
    ctx.fillText(`positive : ${positiveData[tooltipIndex]}`, tooltipX + 20, tooltipY)

    ctx.fillStyle = "#f97316"
    ctx.fillText(`negative : ${negativeData[tooltipIndex]}`, tooltipX + 20, tooltipY + 20)

    ctx.fillStyle = "#9ca3af"
    ctx.fillText(`neutral : ${neutralData[tooltipIndex]}`, tooltipX + 20, tooltipY + 40)

    // Legend at the bottom
    const legendY = height - 10
    const legendSpacing = chartWidth / 3

    // Positive legend
    ctx.strokeStyle = "#22c55e"
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(padding, legendY)
    ctx.lineTo(padding + 20, legendY)
    ctx.stroke()

    ctx.fillStyle = "#ffffff"
    ctx.beginPath()
    ctx.arc(padding + 10, legendY, 4, 0, Math.PI * 2)
    ctx.fill()
    ctx.strokeStyle = "#22c55e"
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.arc(padding + 10, legendY, 4, 0, Math.PI * 2)
    ctx.stroke()

    ctx.fillStyle = "#22c55e"
    ctx.font = "14px sans-serif"
    ctx.textAlign = "left"
    ctx.fillText("positive", padding + 30, legendY + 4)

    // Negative legend
    const negLegendX = padding + legendSpacing
    ctx.strokeStyle = "#f97316"
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(negLegendX, legendY)
    ctx.lineTo(negLegendX + 20, legendY)
    ctx.stroke()

    ctx.fillStyle = "#ffffff"
    ctx.beginPath()
    ctx.arc(negLegendX + 10, legendY, 4, 0, Math.PI * 2)
    ctx.fill()
    ctx.strokeStyle = "#f97316"
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.arc(negLegendX + 10, legendY, 4, 0, Math.PI * 2)
    ctx.stroke()

    ctx.fillStyle = "#f97316"
    ctx.font = "14px sans-serif"
    ctx.textAlign = "left"
    ctx.fillText("negative", negLegendX + 30, legendY + 4)

    // Neutral legend
    const neutralLegendX = padding + legendSpacing * 2
    ctx.strokeStyle = "#9ca3af"
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(neutralLegendX, legendY)
    ctx.lineTo(neutralLegendX + 20, legendY)
    ctx.stroke()

    ctx.fillStyle = "#ffffff"
    ctx.beginPath()
    ctx.arc(neutralLegendX + 10, legendY, 4, 0, Math.PI * 2)
    ctx.fill()
    ctx.strokeStyle = "#9ca3af"
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.arc(neutralLegendX + 10, legendY, 4, 0, Math.PI * 2)
    ctx.stroke()

    ctx.fillStyle = "#9ca3af"
    ctx.font = "14px sans-serif"
    ctx.textAlign = "left"
    ctx.fillText("neutral", neutralLegendX + 30, legendY + 4)
  }, [timeframe])

  return (
    <div className="relative h-[300px] w-full">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}

