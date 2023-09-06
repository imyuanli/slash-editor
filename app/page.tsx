import Editor from "@/components/editor";

export default function Home() {
    return (
        <main className={'h-screen w-full flex flex-col justify-center items-center'}>
            <div className={'text-3xl font-bold font-mono mb-8'}>Slash Editor 0.1</div>
            <Editor/>
        </main>
    )
}
