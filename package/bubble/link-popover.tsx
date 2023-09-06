import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Check, Link, Link2Off} from "lucide-react";
import React from "react";
import {useSetState} from "ahooks";
import {Toggle} from "@/components/ui/toggle";

const LinkPopover = ({editor, getEditor, isActive}: any) => {
    const [state, setState] = useSetState({
        href: editor.getAttributes('link').href,
        open: false
    })

    const {open, href} = state
    const handleOpen = () => {
        setState({
            open: !open
        })
    }

    return (
        <Popover open={open} modal={open} onOpenChange={handleOpen}>
            <PopoverTrigger>
                <Toggle
                    size="sm"
                    pressed={isActive('link')}
                >
                    <Link/>
                </Toggle>
            </PopoverTrigger>
            <PopoverContent className={'w-96'}>
                <div className="grid gap-4">
                    <h4 className="font-medium leading-none">Link</h4>
                    <div className="flex w-full justify-center items-center space-x-2">
                        <Input
                            value={href}
                            required={true}
                            onInput={(e: any) => {
                                setState({
                                    href: e.target.value
                                })
                            }}
                            placeholder={'https://www.baidu.com'}
                        />
                        <div className={'flex space-x-2'}>
                            <Button
                                size={'icon'}
                                variant="outline"
                                onClick={() => {
                                    getEditor().extendMarkRange('link').setLink({href}).run()
                                    handleOpen()
                                }}
                            >
                                <Check />
                            </Button>
                            {isActive('link') && <Button
                              size={'icon'}
                              variant="destructive"
                              onClick={() => {
                                  getEditor().unsetLink().run()
                                  handleOpen()
                              }}
                            >
                              <Link2Off/>
                            </Button>}
                        </div>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
}


export default LinkPopover