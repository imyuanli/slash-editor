import {EditorContent, useEditor} from '@tiptap/react';
import {StarterKit} from "@tiptap/starter-kit";
import SlashCommand from "@/package/slash-command";

const SlashEditor: any = () => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            SlashCommand
        ],
        editorProps: {
            attributes: {
                class: 'prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none h-full w-full',
            },
        },
        content: "/",
    });

    return (
        <div className={'w-full flex justify-center items-center min-h-screen h-screen'}>
            <div className={'relative min-h-[480px] w-full max-w-screen-lg border-stone-200 bg-white sm:mb-[calc(20vh)] sm:rounded-lg sm:border sm:shadow-lg'}>
                <EditorContent className={'h-full'} editor={editor}/>
            </div>
        </div>
    );
}


export default SlashEditor