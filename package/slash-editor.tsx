'use client'

import {EditorContent, useEditor} from '@tiptap/react';
import {defaultExtensions} from "@/package/extensions";
import {forwardRef, useImperativeHandle} from "react";
import Bubble from "@/package/bubble";

interface SlashEditorProps {
    className?: string;
    extensions?: [];
    ref?: any;
}

const SlashEditor: React.FunctionComponent<SlashEditorProps> = forwardRef((
    {
        className = 'relative min-h-[480px] w-full max-w-screen-lg border-stone-200 sm:mb-[calc(20vh)] sm:rounded-lg sm:border sm:shadow-lg',
        extensions,
    },
    ref
) => {

    const editor = useEditor({
        extensions: [...defaultExtensions, extensions],
        editorProps: {
            attributes: {
                class: 'prose prose-stone dark:prose-invert prose-sm sm:prose-base lg:prose-lg m-5 focus:outline-none h-full w-full',
            },
        },
        autofocus: 'end',
        content: `测试测试测试`,
    });

    useImperativeHandle(
        ref,
        () => ({
            editor,
        })
    );

    const getFocus = () => editor?.chain().focus().run();

    return (
        <div
            onClick={getFocus}
            className={className}
        >
            <Bubble editor={editor}/>
            <EditorContent editor={editor}/>
        </div>
    );
})

export default SlashEditor