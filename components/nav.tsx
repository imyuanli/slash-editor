'use client'

import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Github, Moon, Sun} from "lucide-react";
import {useTheme} from "next-themes";

const Nav = () => {
    const {theme, setTheme} = useTheme()

    return (
        <div className={'absolute right-8 top-8 flex justify-center items-center space-x-4'}>
            <Link href={'https://github.com/imyuanli/slash-editor'}>
                <Button size={'icon'} variant={'ghost'}>
                    <Github/>
                </Button>
            </Link>
            <Button size={'icon'} variant={'ghost'}>
                {
                    theme === 'light' ?
                        <Moon onClick={() => setTheme('dark')}/>
                        :
                        <Sun onClick={() => setTheme('light')}/>
                }
            </Button>
        </div>
    );
}


export default Nav