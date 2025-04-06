'use client'

import { LoadingMainComponent } from "@/components/LoadingMainComponent";
import { useGoogleOAuth } from "@/hooks/useGoogleOAuth";

export default function GooglePage() {
    const { isLoading } = useGoogleOAuth()
    if (isLoading) return <LoadingMainComponent />



    const onClick = async () => {
        const res = await fetch('/api/google-auth/test')
        console.log(res)
    }

    return (
        <>
            <main className="flex w-full flex-col gap-2">
                <div className="flex max-w-xl flex-col gap-2 p-4">
                    <a
                        onClick={onClick}
                        className="flex items-center justify-center rounded-lg bg-white px-8 py-2 shadow transition-all hover:-translate-x-1 hover:-translate-y-1 hover:cursor-pointer hover:shadow-md"
                    >
                        TEST Req
                    </a>
                </div>
            </main>
        </>
    )
}
