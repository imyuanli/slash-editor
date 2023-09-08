import packageJson from '@/package.json'
import Nav from "@/components/nav";
import SlashEditor from "@/package/slash-editor";

export default function Home() {
    return (
        <main className={'relative min-h-screen h-full w-full flex flex-col items-center p-4'}>
            <Nav/>
            <div className={'text-3xl font-bold font-mono my-16'}>Slash Editor {packageJson?.version}</div>
            <SlashEditor/>
        </main>
    )
}
