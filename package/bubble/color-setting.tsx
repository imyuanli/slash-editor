import React, {useRef, useState} from "react";
import PopoverBox from "@/package/bubble/popover-box";
import {Ban, Baseline} from "lucide-react";
import {CirclePicker} from "react-color";
import {Button} from "@/components/ui/button";

const colors = ['#4D4D4D', '#999999', '#F44E3B', '#FE9200', '#FCDC00', '#DBDF00', '#A4DD00', '#68CCCA', '#73D8FF', '#AEA1FF', '#FDA1FF', '#333333', '#808080', '#cccccc', '#D33115', '#E27300', '#FCC400', '#B0BC00', '#68BC00', '#16A5A5', '#009CE0', '#7B64FF', '#FA28FF', '#000000', '#666666', '#B3B3B3', '#9F0500', '#C45100', '#FB9E00', '#808900', '#194D33', '#0C797D', '#0062B1', '#653294', '#AB149E']

const ColorSetting = ({editor}: any) => {
    const popoverBoxRef: any = useRef(null)
    const [color, setColor] = useState(editor.getAttributes('textStyle').color)
    return (
        <PopoverBox
            ref={popoverBoxRef}
            icon={<Baseline color={color}/>}
        >
            <CirclePicker
                colors={colors}
                color={color}
                onChange={(color) => {
                    setColor(color.hex)
                    editor.chain().focus().setColor(color.hex).run()
                    popoverBoxRef.current.handleChangeOpen()
                }}
                circleSpacing={8}
            />
            <Button
                className={'w-full mt-4'}
                variant="destructive"
                onClick={() => {
                    editor.chain().focus().unsetColor().run()
                    popoverBoxRef.current.handleChangeOpen()
                }}
            >
                <Ban/>
            </Button>
        </PopoverBox>
    );
}

export default ColorSetting