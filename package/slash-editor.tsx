'use client'

import {EditorContent, useEditor} from '@tiptap/react';
import {defaultExtensions} from "@/package/extensions";

const SlashEditor: any = () => {
    const editor = useEditor({
        extensions: defaultExtensions,
        editorProps: {
            attributes: {
                class: 'prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none h-full w-full',
            },
        },
        content: ``,
    });

    return (
        <div className={'relative min-h-[480px] w-full max-w-screen-lg border-stone-200 bg-white sm:mb-[calc(20vh)] sm:rounded-lg sm:border sm:shadow-lg'}>
            <EditorContent className={'h-full'} editor={editor}/>
        </div>
    );
}

export default SlashEditor