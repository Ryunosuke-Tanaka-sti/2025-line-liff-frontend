
"use client"

import { useAuthProfile } from "@/hooks/useAuth";

export const AdminMenu = () => {
    const { data, isLoading } = useAuthProfile();

    if (isLoading) return <></>

    return (
        <>
            {data && data.userRoles.includes("admin") && (
                <>
                    <a
                        href="/community/google"
                        className="flex items-center justify-center rounded-lg bg-white px-8 py-2 shadow transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-md"
                    >
                        Admin権限を持っているページ
                    </a>

                </>
            )}
        </>
    );
}