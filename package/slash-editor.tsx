'use client'

import {EditorContent, useEditor} from '@tiptap/react';
import {defaultExtensions} from "@/package/extensions";
import {forwardRef, useImperativeHandle} from "react";
import Bubble from "@/package/bubble";
import defaultContent from "@/package/default-content";
import TurndownService from 'turndown';
import {Loader2} from "lucide-react";

interface SlashEditorProps {
    className?: string;
    extensions?: [];
    ref?: any;
}

const defaultClass =
    'relative min-h-[580px] w-full max-w-screen-lg rounded-lg border shadow-lg md:p-8 p-4'


const SlashEditor: React.FunctionComponent<SlashEditorProps> = forwardRef(({
                                                                               className = defaultClass,
                                                                               extensions,
                                                                           },
                                                                           ref
) => {

    const editor = useEditor({
        extensions: [...defaultExtensions, extensions],
        editorProps: {
            attributes: {
                class: 'prose md:prose-lg lg:prose-xl prose-Stone dark:prose-invert prose-headings:font-title font-default focus:outline-none max-w-full',
            },
        },
        autofocus: false,
        content: defaultContent,
    });

    //返回markdown
    useImperativeHandle(
        ref,
        () => ({
            editor,
            getMarkdown: () => {
                const turndownService: any = new TurndownService();
                return turndownService.turndown(editor?.getHTML())
            }
        })
    );

    const getFocus = () => editor?.chain().focus().run();

    return (
        <div
            onClick={getFocus}
            className={className}
        >
            {
                editor ?
                    <>
                        <Bubble editor={editor}/>
                        <EditorContent editor={editor}/>
                    </>
                    :
                    <div className={'flex justify-center items-center'}>
                        <Loader2 size={'28'} className="animate-spin"/>
                    </div>
            }

        </div>
    );
})

export default SlashEditor