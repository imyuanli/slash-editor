import Editor from "@/components/editor";
import packageJson from '@/package.json'

export default function Home() {
    return (
        <main className={'min-h-screen h-full w-full flex flex-col items-center p-4'}>
            <div className={'text-3xl font-bold font-mono my-16'}>Slash Editor {packageJson?.version}</div>
            <Editor/>
        </main>
    )
}
