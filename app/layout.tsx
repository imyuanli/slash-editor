import './globals.css'
import type {Metadata} from 'next'
import ThemeProviders from "@/components/theme-providers";

export const metadata: Metadata = {
    title: 'Slash Editor',
    description: '一个基于 Tiptap 开发的富文本编辑器',
    keywords: 'slash-editor, tiptap, editor, react, nextjs, typescript, tailwindcss, imyuanli, shadcn-ui, rich-text-editor, rich-editor',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <ThemeProviders>
            {children}
        </ThemeProviders>
        </body>
        </html>
    )
}
