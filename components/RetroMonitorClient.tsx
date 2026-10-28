"use client"

import dynamic from "next/dynamic"

// Next 15 only allows `ssr: false` inside Client Components.
const RetroMonitor = dynamic(() => import("@/components/RetroMonitor"), { ssr: false })

export default RetroMonitor
