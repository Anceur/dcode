'use client'
import { useEffect, useState } from "react";
import { LoadingSkeleton } from "@/components/loading-skeleton";
import { Home } from "@/components/home";
import Cursor from "@/components/cursor";

export default function Page() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500)
  }, [])

  return (
    <>
      {!loading ? (
        <>
          <Home />
        </>

      ) : <LoadingSkeleton />
      }

    </>
  )
}
