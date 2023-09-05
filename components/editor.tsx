'use client'

import {useEffect, useRef} from "react";
import SlashEditor from "@/package/slash-editor";

const Editor = () => {
    const editorRef:any = useRef(null);
    useEffect(() => {
        console.log("editorRef",editorRef)
        if (editorRef.current) {
            const editorInstance = editorRef.current?.editor;

            // 在这里可以访问和操作 TipTap 编辑器的实例
            console.log(editorInstance);
        }
    }, [editorRef]);
    return (
        <SlashEditor ref={editorRef}/>
    );
}


export default Editor