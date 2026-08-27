import { Suspense } from 'react'
import CursorGrid from './react-bits/CursorGrid'
import Loader from './Loader'

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
            <Suspense fallback={<Loader />}>
                <div className="relative z-10">
                    {children}
                </div>
            </Suspense>
        </main>
    )
}
