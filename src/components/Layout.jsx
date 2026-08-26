import { Suspense } from 'react'
import CursorGrid from './react-bits/CursorGrid'

export default function Layout({ children }) {
    return (
        <main className="relative bg-[#07100d]">
            <CursorGrid
                className="z-30 mix-blend-screen"
                cellSize={76}
                color="#34d399"
                radius={165}
                maxOpacity={0.5}
                fillOpacity={0.02}
                holdTime={260}
                fadeDuration={720}
            />
            <Suspense
                fallback={
                    <div className="flex min-h-screen items-center justify-center bg-[#07100d]">
                        <div className="flex items-center gap-2" role="status" aria-label="Loading">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 [animation-delay:150ms]" />
                            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 [animation-delay:300ms]" />
                        </div>
                    </div>
                }
            >
                <div className="relative z-10">
                    {children}
                </div>
            </Suspense>
        </main>
    )
}
