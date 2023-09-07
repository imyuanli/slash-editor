'use client'
import {ThemeProvider} from 'next-themes'

export default function ThemeProviders({children}: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class" defaultTheme={'light'} enableSystem>
            {children}
        </ThemeProvider>
    );
}
