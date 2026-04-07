"use client"

import dynamic from "next/dynamic"

const RocketCursor = dynamic(() => import("@/components/RocketCursor"), { ssr: false })
const OracleWidget = dynamic(() => import("@/components/OracleWidget"), { ssr: false })

export default function ClientShell() {
  return (
    <>
      <RocketCursor />
      <OracleWidget />
    </>
  )
}
