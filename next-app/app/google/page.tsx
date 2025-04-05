'use client'

import { useEffect, useState } from "react"

// const getClientCookies = () => {
//     return document.cookie.split(';').reduce((acc, cookie) => {
//         const [name, value] = cookie.trim().split('=')
//         return { ...acc, [name]: value }
//     }, {})
// }
export default function GooglePage() {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        if (isLoading) {
            const verify = async () => {
                const res = await fetch('/api/google-auth/verify')
                if (res.status === 200) {
                    setIsLoading(false)
                } else {
                    alert('認可に失敗しました')
                }
            }
            verify()
        }
    }, [isLoading])

    // const [cookies, setCookies] = useState<Record<string, string>>({})

    // useEffect(() => {
    //     setCookies(getClientCookies())
    // }, [])
    const onClick = async () => {
        const res = await fetch('/api/google-auth/test')
        console.log(res)
    }

    if (isLoading) {
        return (
            <div className="flex h-screen items-center justify-center">
                <h1 className="text-2xl font-bold">Loading...</h1>
            </div>
        )
    }
    return (
        <>
            <main className="flex w-full flex-col gap-2">
                <div className="flex max-w-xl flex-col gap-2 p-4">
                    <a
                        onClick={onClick}
                        className="flex items-center justify-center rounded-lg bg-white px-8 py-2 shadow transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-md"
                    >
                        TEST Req
                    </a>
                </div>
                {/* <div className="mt-8">
                    <h2 className="mb-4 text-xl font-bold">Client-side Cookies</h2>
                    {Object.entries(cookies).map(([name, value]) => (
                        <div key={name} className="mb-2 rounded-lg border p-4">
                            <h3 className="whitespace-normal break-words font-medium">{name}</h3>
                            <p className="whitespace-normal break-words text-gray-600">{value}</p>
                        </div>
                    ))}
                </div> */}
                {/* <div className="flex max-w-xl flex-col gap-2 p-4">
                    <a
                        href="/api/google-auth/verify"
                        className="flex items-center justify-center rounded-lg bg-white px-8 py-2 shadow transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-md"
                    >
                        認可へ飛ぶ
                    </a>
                </div> */}
            </main>
        </>
    )
}
