import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Check, Link, Link2Off} from "lucide-react";
import React, {useRef, useState} from "react";
import PopoverBox from "@/package/bubble/popover-box";

const LinkPopover = ({editor}: any) => {
    const isActive = () => editor?.isActive('link')
    const [href, setHref] = useState(editor?.getAttributes('link').href)

    const popoverBoxRef: any = useRef(null)
    const handleChangeOpen = () => {
        popoverBoxRef.current.handleChangeOpen()
    }
    return (
        <PopoverBox
            ref={popoverBoxRef}
            icon={<Link/>}
            isActive={isActive()}
            classname={'w-96'}
        >
            <div className="grid gap-4">
                <h4 className="font-medium leading-none">Link</h4>
                <div className="flex w-full justify-center items-center space-x-2">
                    <Input
                        className={'w-full'}
                        value={href}
                        onChange={(e) => {
                            setHref(e.target.value)
                        }}
                        placeholder={'https://www.baidu.com'}
                    />
                    <div className={'flex space-x-2'}>
                        <Button
                            size={'icon'}
                            variant="outline"
                            onClick={() => {
                                editor.chain().focus().setLink({href: href, target: '_blank'}).run()
                                handleChangeOpen()
                            }}
                        >
                            <Check/>
                        </Button>
                        {isActive() && <Button
                          size={'icon'}
                          variant="destructive"
                          onClick={() => {
                              editor?.chain().focus().unsetLink().run()
                              handleChangeOpen()
                          }}
                        >
                          <Link2Off/>
                        </Button>}
                    </div>
                </div>
            </div>
        </PopoverBox>
    );
}


export default LinkPopover