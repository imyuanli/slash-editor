import React, {useRef, useState} from "react";
import PopoverBox from "@/package/bubble/popover-box";
import {Ban, Paintbrush} from "lucide-react";
import {TwitterPicker} from "react-color";
import {Button} from "@/components/ui/button";

const HeadlineSetting = ({editor}: any) => {
    const popoverBoxRef: any = useRef(null)
    const [color, setColor] = useState(editor.getAttributes('textStyle').color)
    return (
        <PopoverBox
            ref={popoverBoxRef}
            icon={<Paintbrush color={color}/>}
        >
            <TwitterPicker
                color={color}
                onChange={(color) => {
                    setColor(color.hex)
                    editor.chain().focus().toggleHighlight({color: color.hex}).run()
                    popoverBoxRef.current.handleChangeOpen()
                }}
            />
            <Button
                className={'w-full mt-4'}
                variant="destructive"
                onClick={() => {
                    editor.chain().focus().unsetHighlight().run()
                    popoverBoxRef.current.handleChangeOpen()
                }}
            >
                <Ban/>
            </Button>
        </PopoverBox>
    );
}


export default HeadlineSetting