"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function UhrieRiskLabRedirect() {
    const router = useRouter()

    useEffect(() => {
        router.replace('/projects/risk-expedition')
    }, [router])

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <p className="text-gray-600">Redirecting to updated project page...</p>
        </div>
    )
}
