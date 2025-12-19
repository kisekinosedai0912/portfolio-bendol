import { Suspense, useRef } from 'react'

export default function Layout({ children }) {
    const endRef = useRef(null)

    return (
        <main className="relative">
            <Suspense
                fallback={
                    <div className="flex items-center justify-center min-h-screen text-white">
                        Loading...
                    </div>
                }
            >
                {children}
            </Suspense>
        </main>
    )
}