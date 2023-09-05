'use client'

import {BubbleMenu, EditorContent, useEditor} from '@tiptap/react';
import {defaultExtensions} from "@/package/extensions";
import {forwardRef, useImperativeHandle} from "react";

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
        content: ``,
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
            {editor && <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
              <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={editor.isActive('bold') ? 'is-active' : ''}
              >
                bold
              </button>
              <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={editor.isActive('italic') ? 'is-active' : ''}
              >
                italic
              </button>
              <button
                onClick={() => editor.chain().focus().toggleStrike().run()}
                className={editor.isActive('strike') ? 'is-active' : ''}
              >
                strike
              </button>
            </BubbleMenu>}
            <EditorContent editor={editor}/>
        </div>
    );
})

export default SlashEditor