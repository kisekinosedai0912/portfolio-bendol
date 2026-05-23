import { Suspense } from 'react'

export default function Layout({ children }) {
    return (
        <main className="relative">
            <Suspense
                fallback={
                    <div className="flex items-center justify-center min-h-screen bg-[#050515]">
                        <div className="flex items-center gap-2" role="status" aria-label="Loading">
                            <span className="w-2 h-2 rounded-full bg-gradient-to-br from-[#6162ff] to-[#b352ff] animate-pulse" />
                            <span className="w-2 h-2 rounded-full bg-gradient-to-br from-[#6162ff] to-[#b352ff] animate-pulse [animation-delay:150ms]" />
                            <span className="w-2 h-2 rounded-full bg-gradient-to-br from-[#6162ff] to-[#b352ff] animate-pulse [animation-delay:300ms]" />
                        </div>
                    </div>
                }
            >
                {children}
            </Suspense>
        </main>
    )
}
