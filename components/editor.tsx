'use client'

import {useRef} from "react";
import SlashEditor from "@/package/slash-editor";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Menu} from "lucide-react";
import {useTheme} from "next-themes";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuPortal,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

const Editor = () => {
    const {theme, setTheme} = useTheme()
    const editorRef: any = useRef(null);
    let editor: any = editorRef.current?.editor
    const getDoc = () => new DOMParser().parseFromString(editor.getHTML(), 'text/html')
    const getTitle = () => getDoc()?.querySelector('h1')?.innerText
    const getHTML = () => {
        return `
               <!DOCTYPE html>
                 <html lang="zh-CN">
                    <head>
                        <meta charset="UTF-8">
                        <title>${getTitle()}</title>
                    </head>
                    <body>
                        ${editor.getHTML()}
                    </body>
                </html>
            `
    }

    const downloadFile = (content: any, type: string) => {
        if (type === 'json') {
            content = JSON.stringify(content)
        }
        const blob = new Blob([content], {type: `application/${type};charset=utf-8`});
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${getTitle()}.${type}`;
        a.click();
        URL.revokeObjectURL(url);
    }


    return (
        <>
            <div className={'md:fixed absolute md:right-12 right-4 top-4 flex justify-center items-center space-x-4'}>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button size={'icon'} variant="ghost">
                            <Menu/>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger>Download</DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                                <DropdownMenuSubContent>
                                    <DropdownMenuItem onClick={() => downloadFile(getHTML(), 'html')}>
                                        HTML
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => downloadFile(editor.getJSON(), 'json')}>
                                        JSON
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => downloadFile(editorRef.current.getMarkdown(), 'md')}>
                                        Markdown
                                    </DropdownMenuItem>
                                </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                        </DropdownMenuSub>
                        <DropdownMenuSeparator/>
                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger>Theme</DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                                <DropdownMenuSubContent>
                                    <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
                                        <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem value="system">System</DropdownMenuRadioItem>
                                    </DropdownMenuRadioGroup>
                                </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                        </DropdownMenuSub>
                        <DropdownMenuSeparator/>
                        <Link href={'https://github.com/imyuanli/slash-editor/'} target={'_blank'}>
                            <DropdownMenuItem>
                                GitHub
                            </DropdownMenuItem>
                        </Link>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <SlashEditor ref={editorRef}/>
        </>
    );
}


export default Editor